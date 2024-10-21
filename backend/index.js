import express from "express";
import dotenv from "dotenv";
import { Pool } from 'pg';
import cors from "cors";
// import authRoutes from "./routes/auth.js";
// import cartRoutes from "./routes/cart.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection
export const pool = new Pool({
  connectionString: process.env.DB_URL,
});

// Connecting to the database
pool
  .connect()
  .then(() => console.log("Connected to the database successfully!"))
  .catch((err) => console.error("Connection error", err.stack));

// Root route
app.get("/", (req, res) => {
  res.send("Hai, I am Shopee API");
});

// Routes
// app.use("/", authRoutes);
// app.use("/cart", cartRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Listening
app.listen(PORT, () => {
  console.log(`Server listening to ${PORT}`);
});
