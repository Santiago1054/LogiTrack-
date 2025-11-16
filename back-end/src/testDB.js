import dotenv from "dotenv";
dotenv.config();

console.log("VARIABLES DEL .env:", {
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
  DB_NAME: process.env.DB_NAME,
});

import { pool } from "./db.js";

async function test() {
  try {
    const res = await pool.query("SELECT NOW()");
    console.log("Conexión correcta:", res.rows[0]);
  } catch (err) {
    console.error("Error de conexión:", err);
  }
}

test();
