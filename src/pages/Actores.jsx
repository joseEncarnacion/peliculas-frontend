import React, { useState, useEffect } from "react";
import axios from 'axios'
import ActorID from "../Components/actorID";

const Actores = () => {

    const [actor, setActor] = useState([]);

    useEffect(() => {
        fectActor()
    }, []);

    const Url = 'http://localhost:3003/api/actor/'

    const fectActor = async () => {
        const res = await axios.get(Url)
        const response = res.data.data
        console.log(response)
        setActor(response)
    }
    console.log('esta prueba de api' + actor.map(item =>(item.movies_id)))
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-4 row-cols-lg-5 g-2">
                {
                    actor.map(item => (
                        <ActorID
                            key={item.id}
                            nombre={item.nombre_actor}
                            fecha={item.fecha_nacimiento}
                            foto = {item.foto}
                            pelicula = {item.pelicula}
                            link = {`/detalle-actor/${item.id}`}
                        />
                    ))
                }

            </div>
        </div>
    )
}

export default Actores