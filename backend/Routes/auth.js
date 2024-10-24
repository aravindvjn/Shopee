import { Router } from "express";
import bcrypt from "bcrypt";
import pkg from "pg";
const { Pool } = pkg;
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const router = Router();

// Database connection
const pool = new Pool({
  connectionString: process.env.DB_URL,
  // ssl: {
  //   rejectUnauthorized: false,
  // },
});

// Error handling middleware
router.use((err, req, res, next) => {
  if (err) {
    console.log("Error Present:", err.message);
  }
  next(err);
});

// Middleware to authenticate the token
export const authenticateToken = (req, res, next) => {
  try {
    const token = req.headers["authorization"]?.split(" ")[1];
    if (!token) return res.sendStatus(401);
    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    });
  } catch (err) {
    console.log("Error in Authentication:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Generate JWT
const generateToken = (id, email) => {
  return jwt.sign({ id, email }, process.env.SECRET_KEY, { expiresIn: "1h" });
};

// Register route
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userExists = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );

    if (userExists.rows.length > 0) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await pool.query(
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id",
      [name, email, hashedPassword]
    );
    const token = generateToken(result.rows[0].id, email);
    res.status(201).json({ token });
  } catch (err) {
    console.error("Error in registering:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Login route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    const user = result.rows[0];
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = generateToken(user.id, user.email);
      res.json({ token });
    } else if (user) {
      res.status(401).json({ message: "Invalid Password" });
    } else {
      res.status(401).json({ message: "Invalid Inputs" });
    }
  } catch (err) {
    console.error("Error in logging in:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Get user details
router.get("/user-data", authenticateToken, async (req, res) => {
  try {
    const response = await pool.query(
      "SELECT name, email, id, created_at FROM users WHERE id = $1",
      [req.user.id]
    );
    if (response.rows.length > 0) {
      res.status(200).json(response.rows[0]);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    console.error("Error in fetching user data:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Update password
router.put("/update-password", authenticateToken, async (req, res) => {
  try {
    const { password, oldPassword } = req.body;
    const result = await pool.query(
      "SELECT * FROM users WHERE email = $1 AND id = $2",
      [req.user.email, req.user.id]
    );
    const user = result.rows[0];

    if (user && (await bcrypt.compare(oldPassword, user.password))) {
      const hashedPassword = await bcrypt.hash(password, 10);
      const response = await pool.query(
        "UPDATE users SET password = $1 WHERE id = $2 AND email = $3 RETURNING id",
        [hashedPassword, req.user.id, req.user.email]
      );
      if (response.rows.length > 0) {
        res.status(200).json({ message: "Password changed!" });
      } else {
        res.status(400).json({ message: "Failed to change password!" });
      }
    } else if (user) {
      res.status(401).json({ message: "Current password is incorrect." });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    console.error("Error in updating password:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
