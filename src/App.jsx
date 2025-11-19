import { Routes, Route } from "react-router-dom";
import './App.css'
import PantallaPrincipal from './components/PantallaPrincipal'
import PaqueteForm from './components/PaqueteForm'
import PaqueteDetalle from './components/PaqueteDetalle'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PantallaPrincipal />} />
        <Route path="/crear-paquete" element={<PaqueteForm />} />
        <Route path="/detalle-paquete/:id" element={<PaqueteDetalle />} />
      </Routes>

    </>
  )
}

export default App
