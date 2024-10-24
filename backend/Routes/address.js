import { authenticateToken } from "./auth";
import { Router } from "express";
import pkg from "pg";
const { Pool } = pkg;
const router = Router();
import dotenv from "dotenv";
dotenv.config();

//Connection
const pool = new Pool({
  connectionString: process.env.DB_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

//getting addresses
router.get("/", authenticateToken, async (req, res) => {
  try {
    const response = await pool.query(
      "SELECT * FROM delivery_address WHERE user_id=$1",
      [req.user.id]
    );
    if (response.rows.length > 0) {
      res.status(200).json(response.rows);
    } else {
      res.status(201).json({ message: "No saved address." });
    }
  } catch (err) {
    console.error("Error in fetching addessess");
    res.status(500).json({ message: "Server not responding." });
  }
});
//getting address by ID
router.get("/:address_id", authenticateToken, async (req, res) => {
  try {
    const { address_id } = req.params;
    const response = await pool.query(
      "SELECT * FROM delivery_address WHERE user_id=$1 AND address_id=$2",
      [req.user.id, address_id]
    );
    if (response.rows.length > 0) {
      res.status(200).json(response.rows[0]);
    } else {
      res.status(201).json({ message: "Something Went Wrong." });
    }
  } catch (err) {
    console.error("Error in fetching addessess");
    res.status(500).json({ message: "Server not responding." });
  }
});

//adding addresses
router.post("/", authenticateToken, async (req, res) => {
  try {
    const {
      name,
      phone_number,
      street,
      city,
      state,
      postal_code,
      country,
      instructions,
    } = req.body;
    const response = await pool.query(
      "INSERT INTO delivery_address (user_id,recipient_name,phone_number,street_address,city,state,postal_code,country,delivery_instructions) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *",
      [
        req.user.id,
        name,
        phone_number,
        street,
        city,
        state,
        postal_code,
        country,
        instructions,
      ]
    );
    if (response.rows.length > 0) {
      res.status(200).json({ message: "Addess added." });
    } else {
      res.status(400).json({ message: "Failed to add address." });
    }
  } catch (err) {
    console.error("Error in adding addessess");
    res.status(500).json({ message: "Server not responding." });
  }
});

//Delete Address
router.delete("/", authenticateToken, async (req, res) => {
  try {
    const { address_id } = req.body;
    const response = await pool.query(
      "DELETE FROM delivery_address WHERE user_id = $1 AND address_id = $2 RETURNING *",
      [req.user.id, address_id]
    );
    if (response.rows.length > 0) {
      res.status(200).json({ message: "Address Deleted" });
    } else {
      res.status(400).json({ message: " Failed to Delete the address." });
    }
  } catch (err) {
    console.log("Error in deleting address");
    res.status(500).json({ message: " Sever Issue , Try again later!" });
  }
});

//Edit address
router.put("/", authenticateToken, async (req, res) => {
  const {
    address_id,
    name,
    phone_number,
    street,
    city,
    state,
    postal_code,
    country,
    instructions,
  } = req.body;
  try {
    const response = await pool.query(
      "UPDATE delivery_address SET recipient_name = $2, phone_number = $3, street_address = $4,city = $5, state = $6, postal_code = $7,country = $8, delivery_instructions = $9 WHERE user_id = $1 AND address_id = $10 RETURNING *",
      [
        req.user.id,
        name,
        phone_number,
        street,
        city,
        state,
        postal_code,
        country,
        instructions,
        address_id,
      ]
    );
    if (response.rows.length > 0) {
      res.status(200).json({
        message: "Address updated successfully",
      });
    } else {
      res.status(404).json({ message: "Address not found." });
    }
  } catch (err) {
    console.error("Error updating address : ", err);
    res.status(500).json({ message: "Server issue, please try again later!" });
  }
});
export default router;
