import { Router } from "express";
import bcrypt from "bcrypt";
import pkg from "pg";
const { Pool } = pkg;
import jwt from "jsonwebtoken";
const router = Router();
import dotenv from "dotenv";
dotenv.config();

//Connection
const pool = new Pool({
  connectionString: process.env.DB_URL,
  // ssl: {
  //   rejectUnauthorized: false,
  // },
});

export default router;
