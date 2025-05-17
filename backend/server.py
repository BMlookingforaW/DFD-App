from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import numpy as np
import cv2
import requests
from PIL import Image, UnidentifiedImageError
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.image import img_to_array
from mtcnn import MTCNN

app = Flask(__name__)
CORS(app)

# ---- Configuration ----
MODEL_PATH = "model/cnn_model.h5"
MODEL_URL = "https://dl.dropboxusercontent.com/scl/fi/1o0gvp4eltstcmw9wk2gi/cnn_model.h5?rlkey=ns6embnac84o3eedfns30nz4o"
UPLOAD_FOLDER = "uploads"
os.makedirs("model", exist_ok=True)
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# ---- Model Loader ----
def download_model_if_missing():
    if os.path.exists(MODEL_PATH):
        print("✅ Model already exists. Skipping download.")
        return
   
    try:
        print("⬇️ Downloading model from Google Drive...")
        response = requests.get(MODEL_URL, timeout=60)
        response.raise_for_status()
        with open(MODEL_PATH, "wb") as f:
            f.write(response.content)
        print("✅ Model downloaded and saved.")
    except Exception as e:
        print("❌ Failed to download model:", str(e))
        raise RuntimeError("Model download failed")

download_model_if_missing()
model = load_model(MODEL_PATH)
face_detector = MTCNN()

# ---- Helper Functions ----
def detect_and_crop_face(img_path):
    img = cv2.imread(img_path)
    if img is None:
        return None, "Invalid image format"

    results = face_detector.detect_faces(img)
    if results:
        x, y, w, h = results[0]['box']
        face = img[y:y+h, x:x+w]
        face = cv2.resize(face, (128, 128))
        return face, None
    else:
        try:
            fallback = cv2.resize(img, (128, 128))
            return fallback, "No face detected — using full image"
        except Exception:
            return None, "Failed to process image"

def preprocess_image(image_array):
    img_array = img_to_array(image_array) / 255.0
    return np.expand_dims(img_array, axis=0)

# ---- Routes ----
@app.route("/")
def root():
    return jsonify({"status": "DeepFake API is running"})

@app.route("/api/detect", methods=["POST"])
def detect():
    uploaded_file = request.files.get("file")
    if not uploaded_file:
        return jsonify({"error": "No file uploaded"}), 400

    try:
        img = Image.open(uploaded_file)
        img.verify()
        uploaded_file.seek(0)
    except UnidentifiedImageError:
        return jsonify({"error": "Uploaded file is not a valid image"}), 400

    file_path = os.path.join(UPLOAD_FOLDER, uploaded_file.filename)
    uploaded_file.save(file_path)

    face_image, warning = detect_and_crop_face(file_path)
    if face_image is None:
        return jsonify({"error": warning}), 400

    input_tensor = preprocess_image(face_image)
    prediction = model.predict(input_tensor)[0][0]
    confidence = round(float(prediction * 100 if prediction > 0.5 else (1 - prediction) * 100), 2)
    label = "Fake" if prediction > 0.5 else "Real"

    response = {
        "prediction": label,
        "confidence": confidence
    }
    if warning:
        response["note"] = warning

    return jsonify(response)

@app.route("/ping")
def ping():
    return jsonify({"status": "ok", "model": os.path.exists(MODEL_PATH)})

# ---- Start Server ----
if __name__ == "__main__":
    app.run(debug=True)
