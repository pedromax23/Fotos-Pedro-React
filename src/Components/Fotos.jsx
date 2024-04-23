
import Foto from './Foto'
import './Fotos.css'

import {DATA_IMAGENES} from '../data.js'

function Fotos() {
    const fotos = DATA_IMAGENES

    return (
        <main>
            <section className="seccion-fotos">

                {fotos.map((foto, id) => (
                    <Foto key={'foto'+id} {...foto}/>
                ))}
            </section>
        </main>
    )
}

export default Fotos