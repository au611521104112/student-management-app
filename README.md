# 🧑‍🎓 Student Management Web App

A simple full-stack Student Management application built using:

- Frontend: HTML, CSS, JavaScript  
- Backend: Node.js + Express  
- Database: MongoDB (via Mongoose)  
- DevOps: GitHub Actions, Docker, Jenkins

---

## ✨ Features

- Student login form  
- Add, view, update, and delete student data  
- REST API (GET, POST, PUT, DELETE)  
- Frontend and backend fully separated  
- MongoDB integration for persistent storage  

---

## 📦 Project Structure
student-app/
├── backend/ # Node.js + Express server
├── frontend/ # HTML/CSS/JS interface
├── Dockerfile # Docker container config
├── Jenkinsfile # Jenkins CI/CD pipeline
└── .github/workflows/ # GitHub Actions config

---

## 🚀 How to Run Locally

1. Start MongoDB (local or MongoDB Atlas)  
2. Navigate to backend and install dependencies:

```bash
cd backend
npm install
node server.js
