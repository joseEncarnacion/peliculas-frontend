import React from 'react'
import {Link} from 'react-router-dom'

const Pelicula = (props) => {
    const {titulo, genero, fecha, foto, link} = props
    return (
        <div className="card my-3 mx-3 p-0 card-shadows">
            <Link to={link} >
                <img src={foto}  className="card-img-top " alt="poster pelicula" />
            
            </Link>
                <div className="card-body">
                    <div className=" titulo_2"> {titulo} </div>
                    
                    <p className="subtitulo_1"> {fecha} </p>
                </div>
        </div>
    )
}

export default Pelicula