import { Routes, Route } from "react-router-dom";
import './App.css'
import PantallaPrincipal from './components/PantallaPrincipal'
import ListaDePaquetes from './components/ListaDePaquetes'
import PaqueteForm from './components/PaqueteForm'
function App() {
  return (
    <>
      <Routes>


        <Route path="/" element={<PantallaPrincipal />} />
       
        <Route path="/crear-paquete" element={<PaqueteForm />} />


      </Routes>

    </>
  )
}

export default App
