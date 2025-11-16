import { pool } from "../db.js";
//GET/paquetes
export const obtenerPaquetes = async (req, res) => {
  const resultado = await pool.query("SELECT * FROM paquete");
  res.json(resultado.rows);
};
//post/crearPaquete
export const crearPaquete = async (req, res) => {
  try {
    const { nombreDestinatario, direccion } = req.body;

    const resultado = await pool.query(
      `INSERT INTO paquete (nombre_destinatario, direccion)
       VALUES ($1, $2)
       RETURNING *`,
      [nombreDestinatario, direccion]
    );

    res.status(201).json({
      mensaje: "Paquete creado correctamente",
      paquete: resultado.rows[0],
    });
  } catch (error) {
    console.error("Error al crear paquete:", error);
    res.status(500).json({ error: "Error al crear el paquete" });
  }
};

// PUT/paquetes/{id}/estado
export const actualizarEstado = async (req, res) => {
  try {
    const { id } = req.params;
    const { estado } = req.body;

    // estados permitidos en orden
    const estados = ["CREADO", "EN_TRANSITO", "ENTREGADO"];
    // Obtener el paquete actual
    const paquete = await pool.query(
      "SELECT estado FROM paquete WHERE id = $1",
      [id]
    );

    if (paquete.rows.length === 0) {
      return res.status(404).json({ error: "Paquete no encontrado" });
    }
    const estadoActual = paquete.rows[0].estado;

    // validar que el nuevo estado sea correcto
    if (!estados.includes(estado)) {
      return res.status(400).json({
        error:
          "Estado invalido, Estados permitidos: creado, en_transito, entregado",
      });
    }
    // verificar transicion secuencial
    const indexActual = estados.indexOf(estadoActual);
    const indexNuevo = estados.indexOf(estado);
    // solo puedes cambiar el estado si es el siguiente
    if (indexNuevo !== indexActual + 1) {
      return res.status(400).json({
        error: `Transición inválida. Solo puedes avanzar del estado '${estadoActual}' → '${
          estados[indexActual + 1]
        }'`,
      });
    }

    // actualizar el estado
    const resultado = await pool.query(
      `UPDATE paquete 
        SET estado = $1 
        WHERE id = $2 
        RETURNING *`,
      [estado, id]
    );
    res.json({
      mensaje: "Estado actualizado correctamente",
      paquete: resultado.rows[0],
    });
  } catch (error) {
    console.error("Error al actualizar el estado del paquete:", error);
    res
      .status(500)
      .json({ error: "Error al actualizar el estado del paquete" });
  }
};

// get/paquetes/{id}
export const obtenerPaquetePorId = async (req, res) => {
  try {
    const { id } = req.params;

    const resultado = await pool.query(`SELECT * FROM paquete WHERE id = $1`, [
      id,
    ]);
    if (resultado.rows.length === 0) {
      return res.status(404).json({ error: "Paquete no encontrado" });
    }
    res.json(resultado.rows[0]);
  } catch (error) {
    console.error("Error al obtener el paquete:", error);
    res.status(500).json({ error: "Error al obtener el paquete" });
  }
};
