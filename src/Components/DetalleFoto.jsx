import React from 'react'
import { useParams } from 'react-router-dom'
import './DetalleFoto.css'
import {DATA_IMAGENES} from '../data.js'

function DetalleFoto() {

    
    const {id} = useParams()
    
    const foto = DATA_IMAGENES.filter((imagen) => imagen.id == id)[0]

    return (
        <main>
            <div className="caja-foto-detalle">
                <img src={foto.imagen} alt="Detalle de la foto" />
            </div>
        </main>
    )
}

export default DetalleFoto