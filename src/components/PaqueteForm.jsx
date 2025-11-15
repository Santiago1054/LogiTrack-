// to do: Mostrar Formulario para enviar paquete
// ● ID único (genera automáticamente) 
// ● Nombre destinatario 
// ● Dirección 
// ● Estado (CREADO, EN_TRANSITO, ENTREGADO)
// ● Fecha de creación (automática)    
import { Link } from "react-router-dom";
import "../styles/paqueteForm.css"; // Importamos los estilos separados

function PaqueteForm() {
    return (
        <form className="form-paquete" >

            <div className="campo-form">
                <label htmlFor="destinatario">Nombre destinatario:</label>
                <input
                    type="text"
                    id="destinatario"
                    name="destinatario"
                    required
                />
            </div>

            <div className="campo-form">
                <label htmlFor="direccion">Dirección:</label>
                <input
                    type="text"
                    id="direccion"
                    name="direccion"
                    required
                />
            </div>



            <button className="btn-enviar" type="submit">Crear paquete</button>
            <Link className="btn-enviar " to="/">
                Cancelar
            </Link>

        </form>
    )
}
export default PaqueteForm