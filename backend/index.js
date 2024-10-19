import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import pkg from "pg";
import cors from "cors";

dotenv.config();
const { Pool } = pkg;
const app = express();
const PORT = process.env.PORT || 3000;
//Middle Wares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//database connnection
const pool = new Pool({
  connectionString: process.env.DB_URL,
});
//connecting
pool
  .connect()
  .then(() => console.log("Connected to the database successfully!"))
  .catch((err) => console.error("Connection error", err.stack));

//Root route
app.get("/", (req, res) => {
  res.send("Hai, I am Shopee API");
});

//JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET_KEY, { expiresIn: "1h" });
};
// Register route
app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const result = await pool.query(
    "INSERT INTO users (name,email, password) VALUES ($1, $2,$3) RETURNING id",
    [name, email, hashedPassword]
  );
  const token = generateToken(result.rows[0].id);
  res.status(201).json({ token });
});
// Login route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const result = await pool.query("SELECT * FROM users WHERE email = $1", [
    email,
  ]);
  const user = result.rows[0];
  if (user && (await bcrypt.compare(password, user.password))) {
    const token = generateToken(user.id);
    res.json({ token });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

// Middleware to authenticate the token
const authenticateToken = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) return res.sendStatus(401);
  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403);
    console.log("User", user);
    req.user = user;
    next();
  });
};
//get user details
app.get("/user-data", authenticateToken, async (req, res) => {
  if (req.user) {
    const response = await pool.query("SELECT name,email,id FROM users WHERE id = $1", [
      req.user.id,
    ]);
    res.status(200).json(response.rows[0])
  } else {
    res.status(401).json({ message: "No user logged in" });
  }
});
//Listening
app.listen(PORT, () => {
  console.log(`Server listening to ${PORT}`);
});