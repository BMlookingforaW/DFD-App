# 🧠 DeepFake Detection Platform

An AI-powered SaaS application that detects deepfakes from uploaded images and educates users about deepfake technology, detection methods, and real-world implications.

Built with:
- 🔥 React + Tailwind + Clerk for frontend
- 🧪 Flask + TensorFlow + MTCNN for backend
- ☁️ Deployed on Vercel (frontend) and Render (backend)

---

## 🚀 Features

### 🎯 Deepfake Detection
- Upload an image
- Backend uses a CNN model + face detection to analyze the image
- Returns a **real/fake** prediction with confidence score

### 📚 Educational Hub
- Learn what deepfakes are
- Understand how they’re made
- Explore detection techniques and real datasets

### 🔐 Authentication
- Sign in required for all routes
- Powered by [Clerk.dev](https://clerk.dev)

---

## 🧱 Tech Stack

| Layer      | Tech                      |
|------------|---------------------------|
| Frontend   | React + Vite + Tailwind CSS |
| Backend    | Flask + TensorFlow + OpenCV |
| Auth       | Clerk                     |
| Face Crop  | MTCNN                     |
| Deployment | Vercel (frontend) + Render (backend) |

---

## ✨ Screenshots

Coming soon...

---

## 🔧 Setup Instructions

### 🖥 Frontend (React + Clerk)

```bash
cd frontend
npm install
