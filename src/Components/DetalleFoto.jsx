import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './DetalleFoto.css'

function DetalleFoto() {

    const [foto, setFoto] = useState([])
    const apiKey = import.meta.env.VITE_API_KEY;
    const baseUrl = import.meta.env.VITE_URL;

    const {id} = useParams()

    useEffect(() => {
        fetch(baseUrl +'/'+ id + '?api_key=' + apiKey).then(res => res.json())
        .then(data => setFoto(data.foto))
    }, [])
    return (
        <main>
            <div className="caja-foto-detalle">
                <img src={foto.imagen} alt="Detalle de la foto" />
            </div>
        </main>
    )
}

export default DetalleFoto