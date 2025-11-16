// to do: Mostrar Formulario para enviar paquete
// ● ID único (genera automáticamente) 
// ● Nombre destinatario 
// ● Dirección 
// ● Estado (CREADO, EN_TRANSITO, ENTREGADO)
// ● Fecha de creación (automática)    
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/paqueteForm.css"; // Importamos los estilos separados

function PaqueteForm() {
    const [nombreDestinatario, setDestinatario] = useState("")
    const [direccion, setDireccion] = useState("")
    const navigate = useNavigate();
    const handleOnSubmit = async (event) => {
        event.preventDefault();
        const nuevoPaquete = {
            nombreDestinatario,
            direccion
        }
        console.log("NUEVO PAQUETE", nuevoPaquete)
        try {
            const respuesta = await fetch("http://localhost:4000/api/paquetes", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(nuevoPaquete)
            });
            const data = await respuesta.json();
            console.log("Paquete creado correctamente: ", data)
            // limpiar formulario
            setDestinatario("");
            setDireccion("");
            navigate("/");
        }
        catch (error) {
            console.error("Error creando paquete:", error);
            alert("Hubo un error al crear el paquete");
        }
    }


    return (
        <form className="form-paquete" onSubmit={handleOnSubmit}>

            <div className="campo-form">
                <label htmlFor="destinatario">Nombre destinatario:</label>
                <input
                    type="text"
                    id="destinatario"
                    name="destinatario"
                    value={nombreDestinatario}
                    onChange={(e) => setDestinatario(e.target.value)}
                    required
                />
            </div>

            <div className="campo-form">
                <label htmlFor="direccion">Dirección:</label>
                <input
                    type="text"
                    id="direccion"
                    name="direccion"
                    value={direccion}
                    onChange={(e) => setDireccion(e.target.value)}
                    required
                />
            </div>



            <button className="btn-enviar" type="submit">Crear paquete</button>
            <Link className="btn-enviar" to="/">
                Cancelar
            </Link>

        </form>
    )
}
export default PaqueteForm