import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/paqueteForm.css";

function PaqueteForm() {
    const [nombreDestinatario, setDestinatario] = useState(""); // <-- Estado para el nombre del destinatario
    const [direccion, setDireccion] = useState("");// <-- Estado para la dirección

    const navigate = useNavigate(); // <-- Hook para navegación programática en React

    // Función para enviar el paquete
    const handleOnSubmit = async (event) => {

        event.preventDefault(); // <-- Evitar que recargue la página
        const nuevoPaquete = { nombreDestinatario, direccion }; // <-- Crear objeto nuevo paquete

        try {
            // Enviar solicitud a la API para crear el paquete
            const respuesta = await fetch("http://localhost:4000/api/paquetes", {
                method: "POST", // <-- Usar método POST para crear
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(nuevoPaquete) // <-- Datos a enviar
            });

            const data = await respuesta.json(); // <-- Obtener respuesta en formato JSON

            //console.log("Paquete creado correctamente:", data); // <-- Mostrar en consola
            setDestinatario(""); // <-- Limpiar campos
            setDireccion(""); // <-- Limpiar campos
            navigate("/"); // <-- Navegar a la página principal 

        } catch (error) {
            console.error("Error creando paquete:", error);
            alert("Hubo un error al crear el paquete"); // <-- Mostrar en alerta
        }
    };

    return (
        <section className="form-paquete-container">
            <h1>Crear nuevo paquete</h1>

            <form className="form-paquete" onSubmit={handleOnSubmit}>

                <div className="campo-form">
                    <label htmlFor="destinatario">Nombre del destinatario</label>
                    <input
                        type="text"
                        id="destinatario"
                        value={nombreDestinatario}
                        onChange={(e) => setDestinatario(e.target.value)}
                        required
                    />
                </div>

                <div className="campo-form">
                    <label htmlFor="direccion">Dirección</label>
                    <input
                        type="text"
                        id="direccion"
                        value={direccion}
                        onChange={(e) => setDireccion(e.target.value)}
                        required
                    />
                </div>

                <div className="acciones-form">
                    <Link className="btn-cancelar" to="/">Cancelar</Link>
                    <button className="btn-crear" type="submit">Crear paquete</button>
                </div>


            </form>
        </section>
    );
}

export default PaqueteForm;
