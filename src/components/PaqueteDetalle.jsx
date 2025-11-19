// PaqueteDetalle.jsx
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/paqueteDetalle.css";

function PaqueteDetalle() {

    const { id } = useParams(); // <-- Aquí tomamos el id de la URL
    const [paquete, setPaquete] = useState({}); // <-- Lista de paquetes

    // Función para formatear la fecha
    const formatearFechaLarga = (fechaISO) => {
        const fecha = new Date(fechaISO); // <-- Crear objeto Date

        return fecha.toLocaleDateString("es-CO", { // <-- Formatear fecha
            weekday: "long", // <-- Nombre de la semana
            year: "numeric", // <-- Año
            month: "long", // <-- Mes
            day: "numeric" // <-- Día
        });

    };
    // Obtener los datos del paquete
    useEffect(() => {
        fetch(`http://localhost:4000/api/paquetes/${id}`) // <-- Obtener datos del paquete
            .then((res) => res.json()) // <-- Obtener datos en formato JSON
            .then((data) => {
                console.log("DATA", data);
                setPaquete(data);
            });
    }, [id]); // <-- Obtener datos cuando cambie el id

    return (
        <section className="paquete-detalle">
            <h1>Detalle del paquete</h1>
            <table>
                <tbody>
                    <tr>
                        <td>Destinatario:</td>
                        <td>{paquete.nombre_destinatario}</td>
                    </tr>
                    <tr>
                        <td>Dirección:</td>
                        <td>{paquete.direccion}</td>
                    </tr>
                    <tr>
                        <td>Estado:</td>
                        <td>
                            <span className={`estado-badge estado-${paquete.estado?.toLowerCase()}`}>
                                {paquete.estado}
                            </span>
                        </td>

                    </tr>
                    <tr>
                        <td>Fecha de creación:</td>
                        <td>{formatearFechaLarga(paquete.fecha_creacion)}</td>
                    </tr>
                </tbody>
            </table>
            <Link className="btn-volver" to="/">Ir atras</Link>
        </section >
    );
}

export default PaqueteDetalle;  