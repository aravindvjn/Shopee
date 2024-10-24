import { authenticateToken } from "./auth.js";
import { Router } from "express";
import pkg from "pg";
const { Pool } = pkg;
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

// Get cart by user
router.get("/", authenticateToken, async (req, res) => {
  try {
    const response = await pool.query("SELECT * FROM cart WHERE user_id=$1", [
      req.user.id,
    ]);
    if (response.rows.length > 0) {
      res.status(200).json(response.rows);
    } else {
      res.status(200).json({ message: "No items in the cart." });
    }
  } catch (err) {
    console.error("Error in fetching cart details:", err);
    res.status(500).json({ message: "Server issue, please try again later!" });
  }
});

// Create cart
router.post("/", authenticateToken, async (req, res) => {
  try {
    const { product_id } = req.body;
    const response = await pool.query(
      "INSERT INTO cart (user_id, product_id, quantity) VALUES ($1, $2, $3) RETURNING *",
      [req.user.id, product_id, 1]
    );
    if (response.rows.length > 0) {
      res.status(201).json({ message: "Added to the cart." });
    } else {
      res.status(400).json({ message: "Failed to add to the cart." });
    }
  } catch (err) {
    console.error("Error in creating cart:", err);
    res.status(500).json({ message: "Server issue, please try again later!" });
  }
});

// Delete cart item
router.delete("/", authenticateToken, async (req, res) => {
  try {
    const { product_id } = req.body;
    const response = await pool.query(
      "DELETE FROM cart WHERE user_id = $1 AND product_id = $2 RETURNING *",
      [req.user.id, product_id]
    );
    if (response.rows.length > 0) {
      res.status(200).json({ message: "Removed from the cart." });
    } else {
      res.status(400).json({ message: "Failed to remove from the cart." });
    }
  } catch (err) {
    console.error("Error in deleting cart item:", err);
    res.status(500).json({ message: "Server issue, please try again later!" });
  }
});

// Edit quantity of the cart
router.put("/", authenticateToken, async (req, res) => {
  const { product_id, quantity } = req.body;
  if (!product_id || quantity === undefined) {
    return res
      .status(400)
      .json({ message: "Product ID and quantity are required." });
  }

  try {
    const response = await pool.query(
      "UPDATE cart SET quantity = $1 WHERE user_id = $2 AND product_id = $3 RETURNING *",
      [quantity, req.user.id, product_id]
    );
    if (response.rows.length > 0) {
      res.status(200).json({ message: "Cart updated." });
    } else {
      res.status(404).json({ message: "Product not found in the cart." });
    }
  } catch (err) {
    console.error("Error updating product in cart:", err);
    res.status(500).json({ message: "Server issue, please try again later!" });
  }
});

export default router;
