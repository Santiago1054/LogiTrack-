// to do: Mostrar Pantalla principal
import { Link } from "react-router-dom";
import { useState, useEffect } from "react"
import ListaDePaquetes from "./ListaDePaquetes"
import PaqueteForm from "./PaqueteForm"
import "../styles/paqueteForm.css"


function PantallaPrincipal() {
    const [vista, setVista] = useState("Listado-Paquetes")
    const handleOnClick = () => {
        setVista("Formulario-Paquete")
    }
    return (

        <div className="card">
            <h1>LogiTrack</h1>

            <Link className="btn-enviar btn-crear" to="/crear-paquete">
                Crear Paquete
            </Link>

            <ListaDePaquetes />
        </div>


    )
}
export default PantallaPrincipal