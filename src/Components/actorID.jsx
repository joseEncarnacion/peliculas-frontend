import React from "react";
import {Link} from 'react-router-dom'

const ActorID = (props)=>{
    const {nombre, fecha, foto, link} =props
    return(
        <div className="card my-3 mx-3 p-0 card-shadows">
            <Link to={link} >
                <img src= {foto}  className="card-img-top " alt="foto actor" />
            
            </Link>
                <div className="card-body">
                    <div className=" titulo_2"> {nombre} </div>
                    
                    <p className="subtitulo_1"> {fecha} </p>
                </div>
        </div>
    )
}

export default ActorID