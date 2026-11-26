# 🚀 InterVue – AI-Powered Mock Interview Platform

An intelligent, full-stack AI-powered mock interview platform designed to help students and job seekers prepare for technical and HR interviews.

InterVue allows users to upload their resumes, generate personalized interview questions, practice real-world interview rounds, and receive AI-powered feedback to improve their interview performance.

Built with the **MERN Stack**, InterVue follows a modern **SaaS-based architecture** with secure authentication, resume analysis, AI integration, credit-based access, online payments, and a responsive user interface.

---

## ✨ Features

### 📄 1. Resume Analysis
- Upload resumes in PDF format.
- Extract relevant information from uploaded resumes.
- Analyze skills, projects, education, and experience.
- Generate personalized interview questions based on resume content.
- Customize interview preparation according to the selected job role.

### 🤖 2. AI-Powered Interview Generation
- Generate interview questions using AI.
- Personalized questions based on candidate skills and projects.
- Support for Technical and HR interview rounds.
- Role-based interview question generation.
- Simulate real-world interview scenarios.

### 🎯 3. Interactive Interview Practice
- Practice technical and HR interview rounds.
- Answer AI-generated interview questions.
- Interactive interview experience.
- Evaluate answers based on relevance and quality.
- Track interview preparation and performance.

### 🧠 4. Intelligent AI Feedback
- AI-generated feedback on interview responses.
- Analyze answer quality, accuracy, and relevance.
- Identify strengths and weaknesses.
- Highlight areas that need improvement.
- Provide actionable suggestions for better performance.

### 🔐 5. Authentication & User Management
- Google Authentication using Firebase.
- Secure user authentication.
- User-specific dashboard and interview history.
- Protected backend API routes.
- Manage user profiles and account information.

### 💳 6. Credit-Based SaaS System
- Credit-based access to platform features.
- Track and manage user credits.
- Purchase additional credits.
- Razorpay payment gateway integration.
- Payment verification and credit updates.
- Manage user transactions and credit usage.

### 🎨 7. Modern User Interface
- Responsive and interactive dashboard.
- Modern SaaS-style design.
- Smooth animations using Framer Motion.
- Reusable UI components.
- User-friendly navigation and layouts.
- Optimized experience across desktop and mobile devices.

---
## ⚙️ Installation & Setup

Follow these steps to set up and run the AI-Powered Mock Interview Platform locally.

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd AI-Mock-Interview
```

### 2. Install Dependencies

Install the frontend dependencies:

```bash
cd client
npm install
```

Install the backend dependencies:

```bash
cd ../server
npm install
```

### 3. Configure Environment Variables

Create a `.env` file inside the `server` directory and add the following configuration:

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret

AI_API_KEY=your_ai_api_key

CLIENT_URL=http://localhost:5173
```

Configure your Firebase project credentials in the frontend according to your Firebase configuration.

**Important Security Notes:**
- Never expose secret API keys in frontend code.
- Never commit `.env` files to GitHub.
- Keep Razorpay secret keys and database credentials secure.
- Add `.env` to your `.gitignore` file.

### 4. Start the Backend Server

Open a terminal and run:

```bash
cd server
npm run dev
```

The backend server will start on:

```text
http://localhost:5000
```

### 5. Start the Frontend Application

Open a new terminal and run:

```bash
cd client
npm run dev
```

The frontend development server will start.

### 6. Access the Application

Open your browser and navigate to:

```text
http://localhost:5173
```

🎉 **Congratulations!** Your AI-Powered Mock Interview Platform is now running locally.

---

**Note:** Make sure MongoDB, Firebase, Razorpay, and your AI API credentials are properly configured before using the application.
