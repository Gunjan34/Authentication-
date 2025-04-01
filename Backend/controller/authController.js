import bcrypt from "bcryptjs";
import { pool } from "../db.js"; 
import jwt from "jsonwebtoken";


export const register = async (req, res) => {
  try {
    //  user details from request body
    const { username, email, password } = req.body;

    // Check  all required fields 
    if (!username || !email || !password) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    // Hash the password 
    const hashPassword = await bcrypt.hash(password, 10);

    // SQL query to insert user into database
    const query = `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`;
    const values = [username, email, hashPassword];

    // Execute query
    await pool.query(query, values);

    return res.status(200).json({ success: true, message: "User Registered Successfully" });
  } catch (error) {
    console.error("Registration Error:", error);
    return res.status(500).json({ success: false, message: "Registration failed.", error });
  }
};


const JWT_SECRET = "reuruhciehjjoco54gjdgcjd";

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }

  try {
    const [rows] = await pool.query(`SELECT * FROM users WHERE email=?`, [email]);

    if (rows.length === 0) {
      return res.status(400).json({ success: false, message: "User not found" });
    }

    const user = rows[0];
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(400).json({ success: false, message: "Invalid Password" });
    }

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: "1h" });

    return res.status(200).json({
      success: true,
      message: "Login Successful",
      token: token,
    });

  } catch (error) {
    return res.status(500).json({ success: false, message: "Login Failed", error: error.message });
  }
};

