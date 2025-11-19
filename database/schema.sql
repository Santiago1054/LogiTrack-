CREATE DATABASE logitrack;

\c logitrack;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE paquete (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  nombre_destinatario VARCHAR(255) NOT NULL,
  direccion TEXT NOT NULL,
  estado VARCHAR(20) NOT NULL DEFAULT 'CREADO',
  fecha_creacion TIMESTAMP DEFAULT NOW()
);
