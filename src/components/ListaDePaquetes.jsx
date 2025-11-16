
// to do: Mostrar Lista de todos los paquetes mostrando: ID, destinatario, estado;
import { Link } from "react-router-dom";
import { useState, useEffect } from "react"
import "../styles/ListaDePaquetes.css"

function ListaDePaquetes() {
    const [paquetes, setPaquetes] = useState([]);
    const [estado, setEstado] = useState("");
    const handleEstadoChange = async (id, nuevoEstado) => {
        try {
            const respuesta = await fetch(`http://localhost:4000/api/paquetes/${id}/estado`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ estado: nuevoEstado })
            });

            if (!respuesta.ok) throw new Error("Error en la solicitud");

            // actualizar lista local sin recargar
            setPaquetes(prev =>
                prev.map(p =>
                    p.id === id ? { ...p, estado: nuevoEstado } : p
                )
            );

            console.log(`Estado del paquete ${id} actualizado a ${nuevoEstado}`);
        } catch (error) {
            console.error("Error actualizando estado:", error);
            alert("Hubo un error al actualizar el estado");
        }
    };

    useEffect(() => {
        fetch("http://localhost:4000/api/paquetes")
            .then((res) => res.json())
            .then((data) => {
                console.log("DATA", data);
                setPaquetes(data);
            })
    }, []);
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
                    {paquetes.map((paquete) => (
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
