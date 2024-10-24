import express from "express";
import dotenv from "dotenv";
import pkg from "pg";
const { Pool } = pkg;
import cors from "cors";
import authRoutes from "./Routes/auth";
import cartRoutes from "./Routes/cart";
import addressRoutes from "./Routes/address";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(
  cors({
    origin: process.env.FRONT_END_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection
const pool = new Pool({
  connectionString: process.env.DB_URL,
});

// Root route
app.get("/", (req, res) => {
  res.send("Hai, I am Shopee API");
});

// Routes
app.use("/", authRoutes);
app.use("/cart", cartRoutes);
app.use("/addresses", addressRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Listening
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
