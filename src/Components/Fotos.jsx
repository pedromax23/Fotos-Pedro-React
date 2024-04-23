
import Foto from './Foto'
import './Fotos.css'

function Fotos({fotos}) {

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