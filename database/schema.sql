// Ejecutar en SQL Shell (psql)
// Ejecutar linea por linea
CREATE DATABASE logitrack; // Crea la base de datos

\c logitrack; // Usar la base de datos;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp"; // Extension para poder usar id unicos y aleatorios;

CREATE TABLE paquete (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  nombre_destinatario VARCHAR(255) NOT NULL,
  direccion TEXT NOT NULL,
  estado VARCHAR(20) NOT NULL DEFAULT 'CREADO',
  fecha_creacion TIMESTAMP DEFAULT NOW()
);
