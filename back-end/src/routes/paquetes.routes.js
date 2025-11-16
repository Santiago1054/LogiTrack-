import { Router } from "express";

import {
  obtenerPaquetes,
  obtenerPaquetePorId,
  crearPaquete,
  actualizarEstado,
} from "../controllers/paquetes.controller.js";

const router = Router();

// Obtener todos los paquetes
router.get("/paquetes", obtenerPaquetes);

// Obtener un paquete por id
router.get("/paquetes/:id", obtenerPaquetePorId);

// Crear paquete
router.post("/paquetes", crearPaquete);

// Actualizar estado de un paquete
router.put("/paquetes/:id/estado", actualizarEstado);

export default router;
