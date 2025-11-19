# 📦 LogiTrack --- Guía de Instalación y Configuración

## 🚀 Tecnologías utilizadas

### 🎨 Frontend

El frontend está desarrollado con:

-   **React 19**
-   **React Router DOM 7**
-   **Vite 7**
-   **JavaScript ES Modules**
-   **ESLint**
-   **@vitejs/plugin-react**

#### 📌 Scripts disponibles

 

------------------------------------------------------------------------

## 🛠 Backend (Node.js + Express)

Tecnologías empleadas:

-   **Node.js**
-   **Express 5.1.0**
-   **JavaScript (ES Modules)**
-   **PostgreSQL**
-   **pg** (cliente PostgreSQL)
-   **dotenv**
-   **cors**

------------------------------------------------------------------------

## 📥 Instalación

## Importante: Clonar el repo dentro de una carpeta nueva (Logi-Track)

### 🔧 Prerrequisitos

Debes tener instalado:

-   **Visual Studio Code**
-   **PostgreSQL 16**

Durante la instalación de PostgreSQL:

-   Usuario por defecto: **postgres**
-   Contraseña: la que definiste en el instalador

------------------------------------------------------------------------

## 🗄 Creación de la base de datos en SQL Shell (psql)

### 1️⃣ Abrir **SQL Shell (psql)**

Presiona **ENTER** en todas las opciones excepto cuando pida la
contraseña.

<img width="238" height="141" alt="image" src="https://github.com/user-attachments/assets/28f349f1-5111-4178-a7cb-a0bb77bb4691" />


Luego ingresa tu contraseña y deberías ver el prompt de PostgreSQL
(`postgres=#`).

<img width="574" height="110" alt="image" src="https://github.com/user-attachments/assets/b55f7c3c-9ba9-4bba-bee1-39db4c9166f4" />


### 2️⃣ Crear la base de datos y tabla

- Ejecutar linea por linea.

``` sql
CREATE DATABASE logitrack;

\c logitrack; // usa la base de datos

CREATE EXTENSION IF NOT EXISTS "uuid-ossp"; // extension para usar id aleatorios y unicos

CREATE TABLE paquete (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  nombre_destinatario VARCHAR(255) NOT NULL,
  direccion TEXT NOT NULL,
  estado VARCHAR(20) NOT NULL DEFAULT 'CREADO',
  fecha_creacion TIMESTAMP DEFAULT NOW()
);
```

📌 Puedes usar el archivo `schema.sql` en `/database` y ejecutar línea
por línea en SQL Shell (psql).

------------------------------------------------------------------------

## 📂 Configuración del proyecto

### 1️⃣ Abrir el proyecto en VS Code

### 2️⃣ Abrir dos terminales:

-   Una en: `src/`
-   Otra en: `Logi-Track/back-end/`

------------------------------------------------------------------------

## 📦 Instalación de dependencias

### ✔ Frontend

``` bash
npm install
```

<img width="784" height="86" alt="image" src="https://github.com/user-attachments/assets/f0db0d82-3fa4-44bf-9c1d-e097559d731c" />



### ✔ Backend

``` bash
npm install
```
<img width="798" height="73" alt="image" src="https://github.com/user-attachments/assets/8e11b259-7b8b-4658-a4c9-65ca1f11faf1" />

------------------------------------------------------------------------

## 🔑 Configuración del archivo `.env`

Dentro de `/back-end`, fuera de la carpeta `src`, crear un archivo:

    .env

<img width="351" height="261" alt="image" src="https://github.com/user-attachments/assets/add213ea-50f9-4bef-97e5-5228d090e2bc" />

Agregar en .env:

``` env
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=tu_contraseña
DB_NAME=logitrack
DB_PORT=5432
```

⚠ Puerto recomendado: **5432**\
⚠ Cambiar únicamente contraseña si es distinta.

------------------------------------------------------------------------

## ▶️ Ejecución del proyecto

### 1️⃣ Iniciar Frontend

``` bash
npm run dev
```

### 2️⃣ Iniciar Backend

``` bash
node src/app.js
```

------------------------------------------------------------------------

# ✔ Proyecto ejecutándose correctamente

Si ambos servidores muestran mensajes de éxito, LogiTrack está listo
para usarse.

<img width="763" height="189" alt="image" src="https://github.com/user-attachments/assets/2b78a496-fc64-4c23-84f1-711489ed62e4" />

<img width="1001" height="105" alt="image" src="https://github.com/user-attachments/assets/95720e36-f7cb-4c49-a966-8b5a7edbaf53" />

<img width="1317" height="557" alt="image" src="https://github.com/user-attachments/assets/a8cc66ba-d5c0-4c81-a17e-027b34f5a501" />

------------------------------------------------------------------------

## 📘 Autor

**Santiago Ramírez Castellanos**

