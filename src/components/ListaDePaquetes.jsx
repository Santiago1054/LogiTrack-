
// to do: Mostrar Lista de todos los paquetes mostrando: ID, destinatario, estado;
import { Link } from "react-router-dom";
import { useState, useEffect } from "react"
import "../styles/ListaDePaquetes.css"

function ListaDePaquetes() {

    const [paquetes, setPaquetes] = useState([]); // <-- Lista de paquetes
    // Función para cambiar el estado de un paquete 
    const handleEstadoChange = async (id, nuevoEstado) => {
        try {
            const respuesta = await fetch(`http://localhost:4000/api/paquetes/${id}/estado`, {
                method: "PUT", // <-- Usar método PUT para actualizar
                headers: { // <-- Cabeceras de solicitud
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ estado: nuevoEstado }) // <-- Datos a enviar
            });

            if (!respuesta.ok) throw new Error("Error en la solicitud"); // <-- Si no hay respuesta OK, lanzar error

            // actualizar lista local sin recargar
            setPaquetes(prev =>
                prev.map(p =>
                    p.id === id ? { ...p, estado: nuevoEstado } : p
                )
            );

            // console.log(`Estado del paquete ${id} actualizado a ${nuevoEstado}`);
        } catch (error) {
            console.error("Error actualizando estado:", error.message);
            alert("Transición inválida. El estado no puede tener saltos, ni retroceder ", error.message); // <-- Mostrar en alerta
        }
    };

    // Obtener los paquetes de la API
    useEffect(() => {
        fetch("http://localhost:4000/api/paquetes") //
            .then((res) => res.json()) // <-- Obtener datos en formato JSON
            .then((data) => { // <-- Almacenar los datos en la variable paquetes
                console.log("DATA", data);
                setPaquetes(data); // <-- Actualizar la lista de paquetes
            })
    }, []);

    // Mostrar la lista de paquetes en la pantalla
    return (
        <section>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Destinatario</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    {paquetes.length == 0 ?
                        <tr><td colSpan="4">No hay paquetes</td></tr>
                        : paquetes.map((paquete) => (
                            <tr key={paquete.id}>
                                <td>{paquete.id}</td>

                                <td>
                                    <strong>{paquete.nombre_destinatario}</strong>
                                    <br />
                                    <small>{paquete.direccion}</small>
                                </td>

                                <td>
                                    <select
                                        className={`selector-estado estado-${paquete.estado.toLowerCase()}`}
                                        value={paquete.estado}
                                        onChange={(e) =>
                                            handleEstadoChange(paquete.id, e.target.value)
                                        }
                                    >
                                        <option value="CREADO">CREADO</option>
                                        <option value="EN_TRANSITO">EN TRANSITO</option>
                                        <option value="ENTREGADO">ENTREGADO</option>
                                    </select>

                                </td>
                                <td>
                                    <Link to={`/detalle-paquete/${paquete.id}`}>
                                        <button className="btn-detalle">
                                            Detalle
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </section>

    )
}
export default ListaDePaquetes
