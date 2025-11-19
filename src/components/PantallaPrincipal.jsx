// to do: Mostrar Pantalla principal
import { Link } from "react-router-dom";
import ListaDePaquetes from "./ListaDePaquetes"
import "../styles/PantallaPrincipal.css"
// Componente PantallaPrincipal con botón de crear paquete
// contiene componente ListaDePaquetes
function PantallaPrincipal() {
    return (

        <div className="card">
            <h1>LogiTrack</h1>

            <Link className="btn-enviar" to="/crear-paquete">
                Crear Paquete
            </Link>

            <ListaDePaquetes />
        </div>


    )
}
export default PantallaPrincipal