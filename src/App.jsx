import React from "react"
import {Link, Routes, Route} from 'react-router-dom'
import './App.css'
import './normalize.css'

import Home from "./Components/Home"
import Fotos from "./Components/Fotos"
import DetalleFoto from "./Components/DetalleFoto"

function App() {

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
          <Route path="/Fotos-Pedro-React/" element={<Home />} />
          <Route path="/Fotos-Pedro-React/fotos" element={<Fotos />} />
          <Route path="/Fotos-Pedro-React/fotos/:id" element={<DetalleFoto />} />
        </Routes>
      </>
    )
}

export default App
