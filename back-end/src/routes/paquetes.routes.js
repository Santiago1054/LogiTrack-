// rutas para la gestión de paquetes
import { Router } from "express";
// importar controladores
import {
  obtenerPaquetes,
  obtenerPaquetePorId,
  crearPaquete,
  actualizarEstado,
} from "../controllers/paquetes.controller.js";

// crear router
const router = Router();

// Obtener todos los paquetes
router.get("/paquetes", obtenerPaquetes);

// Obtener un paquete por id
// /paquetes/{id}
router.get("/paquetes/:id", obtenerPaquetePorId);

// Crear paquete
router.post("/paquetes", crearPaquete);

// Actualizar estado de un paquete
// /paquetes/{id}/estado
router.put("/paquetes/:id/estado", actualizarEstado);

export default router;
