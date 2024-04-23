import React, { useEffect, useState } from "react"
import {Link, Routes, Route} from 'react-router-dom'
import './App.css'
import './normalize.css'

import Home from "./Components/Home"
import Fotos from "./Components/Fotos"
import DetalleFoto from "./Components/DetalleFoto"

function App() {

    const [fotos, setFotos] = useState([])
    const apiKey = import.meta.env.VITE_API_KEY;
    const baseUrl = import.meta.env.VITE_URL;

    useEffect(() => {
      // Intentar recuperar fotos del localStorage
      const storedFotos = localStorage.getItem('fotos');
      if (storedFotos) {
          setFotos(JSON.parse(storedFotos));
      } else {
          // Si no hay fotos en el localStorage, obtenerlas de la API
          fetch(`${baseUrl}?api_key=${apiKey}`)
              .then(res => res.json())
              .then(data => {
                  setFotos(data.fotos);
                  // Guardar fotos en el localStorage
                  localStorage.setItem('fotos', JSON.stringify(data.fotos));
              })
              .catch(error => console.error('Error al obtener fotos:', error));
      }
  }, []);

    return (
      <>
        <header className="header">
          <div className="navegacion">
              <nav>
                  <ul className="menu">
                      <Link to="/"><li>Inicio</li></Link>
                      <Link to="/fotos"><li>Fotos</li></Link>
                  </ul>
              </nav>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fotos" element={<Fotos fotos={fotos}/>} />
          <Route path="/fotos/:id" element={<DetalleFoto />} />
        </Routes>
      </>
    )
}

export default App
