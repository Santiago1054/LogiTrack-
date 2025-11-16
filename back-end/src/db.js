import dotenv from "dotenv";
dotenv.config();
console.log("ENV CARGADO:", {
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
  DB_NAME: process.env.DB_NAME,
});

import pkg from "pg";
const { Pool } = pkg;
console.log("PUERTO USADO POR NODE:", process.env.DB_PORT);
export const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT), // <-- AQUÍ EL FIX
  database: process.env.DB_NAME,
});
