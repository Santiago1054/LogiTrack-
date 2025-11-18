import { pool } from "../db.js"; // importar pool de la base de datos

// pool.query es una función de la librería pg que ejecuta consultas en la base de datos

// obtener paquetes de la base de datos
export const obtenerPaquetes = async (req, res) => {
  try {
    // obtener paquetes de la base de datos
    const resultado = await pool.query("SELECT * FROM paquete");

    // devolver los paquetes en formato json
    res.json(resultado.rows);
  } catch (error) {
    // mostrar error en consola
    console.error("Error al obtener paquetes:", error);

    // devolver error en la respuesta
    res.status(500).json({ error: "Error al obtener paquetes" });
  }
};

// crear paquete
export const crearPaquete = async (req, res) => {
  // intentar crear el paquete
  try {
    // obtener datos de la petición
    const { nombreDestinatario, direccion } = req.body;

    // intentar insertar el paquete en la base de datos
    const resultado = await pool.query(
      `INSERT INTO paquete (nombre_destinatario, direccion)
       VALUES ($1, $2)
       RETURNING *`,
      [nombreDestinatario, direccion]
    );

    // devolver el paquete creado en formato json
    res.status(201).json({
      mensaje: "Paquete creado correctamente",
      paquete: resultado.rows[0], // devolver el paquete creado en formato json
    });
  } catch (error) {
    console.error("Error al crear paquete:", error);

    // devolver error en la respuesta
    res.status(500).json({ error: "Error al crear el paquete" });
  }
};

// actualizar estado de un paquete
export const actualizarEstado = async (req, res) => {
  try {
    // obtener datos de la petición
    const { id } = req.params; // obtener id del paquete
    const { estado } = req.body; // obtener estado del paquete

    // estados permitidos en orden
    const estados = ["CREADO", "EN_TRANSITO", "ENTREGADO"];

    // Obtener el paquete actual
    const paquete = await pool.query(
      "SELECT estado FROM paquete WHERE id = $1",
      [id]
    );

    // verificar que el paquete exista
    if (paquete.rows.length === 0) {
      return res.status(404).json({ error: "Paquete no encontrado" });
    }

    // obtener el estado actual del paquete
    const estadoActual = paquete.rows[0].estado;

    // validar que el nuevo estado sea correcto
    if (!estados.includes(estado)) {
      return res.status(400).json({
        error:
          "Estado invalido, Estados permitidos: creado, en_transito, entregado",
      });
    }

    // verificar transicion secuencial
    const indexActual = estados.indexOf(estadoActual); // obtener el indice del estado actual
    const indexNuevo = estados.indexOf(estado); // obtener el indice del nuevo estado

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

// obtener un paquete por id
export const obtenerPaquetePorId = async (req, res) => {
  try {
    const { id } = req.params; // obtener id del paquete

    // intentar obtener el paquete por id
    const resultado = await pool.query(`SELECT * FROM paquete WHERE id = $1`, [
      id,
    ]);

    // verificar que el paquete exista
    if (resultado.rows.length === 0) {
      return res.status(404).json({ error: "Paquete no encontrado" });
    }
    res.json(resultado.rows[0]);
  } catch (error) {
    console.error("Error al obtener el paquete:", error);
    res.status(500).json({ error: "Error al obtener el paquete" });
  }
};
