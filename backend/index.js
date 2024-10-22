import express from "express";
import dotenv from "dotenv";
import pkg from "pg";
const { Pool } = pkg;
import cors from "cors";
import authRoutes from "./routes/auth.js";
import cartRoutes from "./routes/cart.js";
import addressRoutes from './routes/address.js'

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection
const pool = new Pool({
  connectionString: process.env.DB_URL,
  // ssl: {
  //   rejectUnauthorized: false,
  // },
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
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send("Something went wrong!");
// });

// Listening
app.listen(PORT, () => {
  console.log(`Server listening to ${PORT}`);
});
