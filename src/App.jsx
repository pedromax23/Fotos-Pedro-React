import React from "react"
import {Link, Routes, Route} from 'react-router-dom'
import './App.css'
import './normalize.css'
import {DATA_IMAGENES} from './data.js'

import Home from "./Components/Home"
import Fotos from "./Components/Fotos"
import DetalleFoto from "./Components/DetalleFoto"

function App() {
    const fotos = DATA_IMAGENES

    return (
      <>
        <header className="header">
          <div className="navegacion">
              <nav>
                  <ul className="menu">
                      <Link to="/Fotos-Pedro-React"><li>Inicio</li></Link>
                      <Link to="/Fotos-Pedro-React/fotos"><li>Fotos</li></Link>
                  </ul>
              </nav>
          </div>
        </header>

        <Routes>
          <Route path="/Fotos-Pedro-React/" element={<Home />} />
          <Route path="/Fotos-Pedro-React/fotos" element={<Fotos fotos={fotos}/>} />
          <Route path="/Fotos-Pedro-React/fotos/:id" element={<DetalleFoto />} />
        </Routes>
      </>
    )
}

export default App
