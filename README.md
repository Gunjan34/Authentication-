# 🔐 MERN Stack User Authentication with MySQL

A full-stack authentication system using:

- **React** (Frontend)
- **Express.js + Node.js** (Backend)
- **MySQL** (Relational Database)
- **bcryptjs + JWT** (for secure authentication)

This application provides secure **user registration and login** using hashed passwords and JWT-based session management.

---

## 🚀 Features

- ✅ User registration with password hashing (bcrypt)
- ✅ Login with JWT-based token authentication
- ✅ Toast notifications for UX feedback
- ✅ Form validation
- ✅ MySQL database connectivity via `mysql2/promise`
- ✅ Fully responsive UI (Bootstrap-based)

---

## 🛠️ Tech Stack

| Layer      | Tech                          |
|------------|-------------------------------|
| Frontend   | React, Bootstrap, React Router |
| Backend    | Node.js, Express              |
| Database   | MySQL (via `mysql2` library)  |
| Auth       | bcryptjs, JWT                 |
| Utilities  | dotenv, react-toastify, axios |

---

## 📁 Project Structure

├── client/ # React Frontend
│ ├── App.js
│ ├── Login.js
│ ├── Signup.js
│ ├── Home.js
│ └── Navbar.js
├── server/ # Express Backend
│ ├── controller/
│ │ └── authController.js
│ ├── routes/
│ │ └── authRoutes.js
│ ├── utils/
│ │ └── dbUtils.js # (Assumed table creation logic)
│ ├── db.js
│ ├── index.js
│ └── model/
│ └── UserModel.js
├── .env # Environment variables
├── README.md



---

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/mern-auth-mysql.git
cd mern-auth-mysql
2. Backend Setup (Node.js + MySQL)
Install dependencies
cd server
npm install
Create .env file in /server directory
env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=your_db_name
JWT_SECRET=reuruhciehjjoco54gjdgcjd
Start backend server
npm start
Runs at http://localhost:8000

3. Frontend Setup (React)

cd ../client
npm install
npm run dev
Runs at http://localhost:5173 (Vite default)

🔐 API Endpoints
Auth Routes: /api/auth
Method	Endpoint	Description
POST	/register-user	Register a new user
POST	/login-user	Login existing user

✅ Functionality Walkthrough
Registration (/signup):

Accepts username, email, and password

Hashes password using bcryptjs

Inserts user into MySQL DB

Login (/login):

Checks email and password

If valid, returns a JWT token

Shows toast feedback

MySQL Connection Pool:

Uses mysql2/promise

Connection pool created for handling multiple concurrent requests

🧠 How It Works
Frontend collects user data and sends it to the backend via Axios.

Backend validates and securely processes the credentials.

Database stores encrypted passwords using bcrypt.

JWT token is issued upon successful login.

Frontend can store token (e.g. in localStorage) for protected routes (not yet implemented in this setup).


🔮 Possible Future Enhancements
🌐 Token storage and Protected Routes

👤 User profile page

📦 Logout and session expiry

🔒 Route Guards using JWT

🧪 Unit & Integration Tests

🙋‍♂️ Author
👤 Gunjan Mahara

📧 gunjanmahara2@gmail.com

🔗 LinkedIn (https://www.linkedin.com/in/gunjan-mahara-364733258/)
