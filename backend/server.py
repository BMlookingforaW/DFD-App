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
import shutil
import random

print("📦 Starting Flask app...")

app = Flask(__name__)
CORS(app)

# ---- Configuration ----
MODEL_PATH = "model/cnn_model.h5"
MODEL_URL = "https://dl.dropboxusercontent.com/scl/fi/1o0gvp4eltstcmw9wk2gi/cnn_model.h5?rlkey=ns6embnac84o3eedfns30nz4o"
UPLOAD_FOLDER = "uploads"
os.makedirs("model", exist_ok=True)
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

print("📦 Starting Flask app...")  # You should now see this in logs ✅

model = None  # <-- Don't load yet
face_detector = MTCNN()

def download_model_if_missing():
    if os.path.exists(MODEL_PATH):
        print("✅ Model already exists")
        return
    try:
        print("⬇️ Downloading model from Dropbox...")
        with requests.get(MODEL_URL, stream=True, timeout=60) as r:
            r.raise_for_status()
            with open(MODEL_PATH, "wb") as f:
                shutil.copyfileobj(r.raw, f)
        print("✅ Model downloaded.")
    except Exception as e:
        print("❌ Model download failed:", e)
        raise

@app.route("/")
def home():
    return "✅ DeepFake Detection API is running"



@app.route("/api/detect", methods=["POST"])
def dummy_detect():
    print("📥 Dummy /api/detect hit")

    # Simulate processing delay
    import time
    time.sleep(1)

    prediction = random.choice(["Real", "Fake"])
    confidence = round(random.uniform(60.0, 99.9), 2)

    print(f"🧪 Dummy prediction: {prediction} ({confidence}%)")
    return jsonify({
        "prediction": prediction,
        "confidence": confidence,
        "note": "This is a dummy prediction"
    })

# @app.route("/api/detect", methods=["POST"])
# def detect():
#     global model

#     print("🔁 /api/detect hit")

#     if not os.path.exists(MODEL_PATH):
#         print("⬇️ Downloading model...")
#         download_model_if_missing()

#     if model is None:
#         print("🧠 Loading model...")
#         model = load_model(MODEL_PATH)
#         print("✅ Model loaded")

#     uploaded_file = request.files.get("file")
#     if not uploaded_file:
#         print("🚫 No file uploaded")
#         return jsonify({"error": "No file uploaded"}), 400

#     try:
#         print(f"📥 Received file: {uploaded_file.filename}")
#         file_path = os.path.join("uploads", uploaded_file.filename)
#         uploaded_file.save(file_path)
#         print("📸 File saved")

#         img = cv2.imread(file_path)
#         results = face_detector.detect_faces(img)
#         print("🧠 Face detection complete")

#         if results:
#             x, y, w, h = results[0]['box']
#             face = img[y:y+h, x:x+w]
#         else:
#             face = cv2.resize(img, (128, 128))

#         face = cv2.resize(face, (128, 128))
#         input_tensor = np.expand_dims(img_to_array(face) / 255.0, axis=0)

#         prediction = model.predict(input_tensor)[0][0]
#         confidence = round(float(prediction * 100 if prediction > 0.5 else (1 - prediction) * 100), 2)
#         label = "Fake" if prediction > 0.5 else "Real"

#         print(f"✅ Prediction: {label}, Confidence: {confidence}")
#         return jsonify({"prediction": label, "confidence": confidence})

#     except Exception as e:
#         print("❌ Error during detection:", str(e))
#         return jsonify({"error": "Server error", "detail": str(e)}), 500


@app.route("/ping")
def ping():
    return jsonify({"status": "ok", "model_cached": os.path.exists(MODEL_PATH)})

if __name__ == "__main__":
    import os
    port = int(os.environ.get("PORT", 5000))
    print(f"🚀 Binding to port {port}...")
    print("🌐 Flask successfully running!")
    app.run(host="0.0.0.0", port=port)

