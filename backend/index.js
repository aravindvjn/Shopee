import express from "express";
import dotenv from "dotenv";
import pkg from "pg";
import cors from "cors";
import authRoutes from "./Routes/auth.js";
import cartRoutes from './Routes/cart.js';

dotenv.config();
const { Pool } = pkg;
const app = express();
const PORT = process.env.PORT || 3000;
//Middle Wares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//database connnection
export const pool = new Pool({
  connectionString: process.env.DB_URL,
});
//connecting
pool
  .connect()
  .then(() => console.log("Connected to the database successfully!"))
  .catch((err) => console.error("Connection error", err.stack));

pool.on("error", (err, client) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});

//Root route
app.get("/", (req, res) => {
  res.send("Hai, I am Shopee API");
});

//routes
app.use("/", authRoutes);
app.use("/cart", cartRoutes)
//Listening
app.listen(PORT, () => {
  console.log(`Server listening to ${PORT}`);
});
