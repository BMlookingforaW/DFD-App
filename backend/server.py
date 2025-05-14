from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import numpy as np
import cv2
from PIL import Image, UnidentifiedImageError
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.image import img_to_array
from mtcnn import MTCNN

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = 'uploads'
MODEL_PATH = 'model/cnn_model.h5'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# Load model and face detector once
model = load_model(MODEL_PATH)
face_detector = MTCNN()

def detect_and_crop_face(img_path):
    img = cv2.imread(img_path)
    if img is None:
        return None, "Invalid image format"

    results = face_detector.detect_faces(img)

    if results:
        x, y, width, height = results[0]['box']
        face = img[y:y+height, x:x+width]
        face = cv2.resize(face, (128, 128))
        return face, None
    else:
        # Fallback: use full image if face not found
        try:
            fallback_img = cv2.resize(img, (128, 128))
            return fallback_img, "No face detected — using full image"
        except Exception:
            return None, "Failed to process image"

def preprocess_image(image_array):
    img_array = img_to_array(image_array) / 255.0
    return np.expand_dims(img_array, axis=0)

@app.route('/api/detect', methods=['POST'])
def detect():
    uploaded_file = request.files.get('file')
    if not uploaded_file:
        return jsonify({'error': 'No file uploaded'}), 400

    try:
        img = Image.open(uploaded_file)
        img.verify()
        uploaded_file.seek(0)
    except UnidentifiedImageError:
        return jsonify({'error': 'Uploaded file is not a valid image'}), 400

    # Save file temporarily
    filepath = os.path.join(UPLOAD_FOLDER, uploaded_file.filename)
    uploaded_file.save(filepath)

    # Detect and preprocess
    face_image, warning = detect_and_crop_face(filepath)
    if face_image is None:
        return jsonify({'error': warning}), 400

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

if __name__ == '__main__':
    app.run(debug=True)
