import dotenv from "dotenv"; // importar dotenv para cargar variables de entorno

dotenv.config(); // cargar variables de entorno desde el archivo .env

/*
console.log("ENV CARGADO:", {
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
  DB_NAME: process.env.DB_NAME,
}); 
*/

import pkg from "pg"; // importar pg para conectarse a la base de datos
const { Pool } = pkg; // crear Pool de la librería pg

//console.log("PUERTO USADO POR NODE:", process.env.DB_PORT);

// conectarse a la base de datos
export const pool = new Pool({
  user: process.env.DB_USER, //
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
});
