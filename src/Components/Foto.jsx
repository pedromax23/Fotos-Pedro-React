
import { Link } from 'react-router-dom'
import './Foto.css'

function Foto({id, imagen}) {

    return (        
        <article key={'foto'+id} className="caja-foto">

            <Link to={"/Fotos-Pedro-React/fotos/"+id}>
                <img loading='lazy' src={imagen} alt="Imagen del cumpleaños" />
            </Link>
        </article>
    )
}

export default Foto