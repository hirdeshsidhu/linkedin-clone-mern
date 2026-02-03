## LinkedIn Clone (MERN Stack)

This is a LinkedIn-inspired full-stack web application built using the MERN stack.  
The project currently focuses on implementing a secure authentication system and basic user management, forming the foundation for future social networking features.

### 🚀 Features Implemented So Far

- User authentication with **JWT (JSON Web Tokens)**
- Secure **signup, login, and logout** functionality
- Password hashing using **bcrypt**
- Authentication handled via **HTTP-only cookies**
- Protected routes using custom authentication middleware
- Fetching the currently logged-in user
- Global user state management using **React Context API**
- Responsive frontend built with **React, Tailwind CSS, and Vite**
- Clean separation of frontend and backend concerns

### 🛠 Tech Stack

**Frontend**
- React (Vite)
- Tailwind CSS
- Axios
- React Router
- React Context API

**Backend**
- Node.js
- Express.js
- MongoDB & Mongoose
- JWT for authentication
- bcrypt for password hashing
- Cookie-based session handling

### 🔐 Authentication Flow

1. User signs up or logs in
2. Backend generates a JWT and stores it in an HTTP-only cookie
3. Protected routes verify the token using middleware
4. Logged-in user data is fetched and stored in global context
5. Logout clears the authentication cookie and frontend state

### 📦 Project Status

⚠️ **Work in Progress**

Planned features include:
- Profile creation & editing
- Image uploads (profile & cover photos)
- Posts, likes, and comments
- Connections system
- Job listings

This project is being built step-by-step to closely mimic real-world LinkedIn functionality while following best practices.

---

