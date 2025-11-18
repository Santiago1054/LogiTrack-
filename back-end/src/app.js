// importar dependencias
import express from "express";
import cors from "cors";

// importar rutas
import paquetesRoutes from "./routes/paquetes.routes.js";

const app = express();

// Middlewares
app.use(cors()); // activar middleware cors
app.use(express.json()); // activar middleware json

// Rutas
app.use("/api", paquetesRoutes);

// Ruta base
app.get("/", (req, res) => {
  res.send("API LogiTrack funcionando");
});

// Manejo de rutas no encontradas
app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

// Inicialización del servidor
app.listen(4000, () => {
  console.log("Servidor corriendo en http://localhost:4000");
});
