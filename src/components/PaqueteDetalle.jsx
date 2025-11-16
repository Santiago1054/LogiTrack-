// PaqueteDetalle.jsx
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/paqueteDetalle.css";

function PaqueteDetalle() {
    const { id } = useParams(); // <-- Aquí tomamos el id de la URL
    const [paquete, setPaquete] = useState({});
    const formatearFechaLarga = (fechaISO) => {
        const fecha = new Date(fechaISO);
        return fecha.toLocaleDateString("es-CO", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        });
    };
    useEffect(() => {
        fetch(`http://localhost:4000/api/paquetes/${id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log("DATA", data);
                setPaquete(data);
            });
    }, [id]);

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
            <Link className="btn-enviar" to="/">Volver al listado de paquetes</Link>
        </section >
    );
}

export default PaqueteDetalle;  