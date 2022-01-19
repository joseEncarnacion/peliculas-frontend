import axios from "axios";
import React, {useEffect, useState} from "react";


const CrearActor = () => {

    const [crearActor, setCrearActor] = useState({
        nombre_actor: '',
        fecha_nacimiento: '',
        sexo : '',
        foto : '',
        movies_id: ''
    });

    const handelChange = (e)=>{
        const {name, value} = e.target
        setCrearActor({
            ...crearActor,
            [name]:value
        })

    }

    const URL = 'http://localhost:3003/api/actor/'

    const handleSumit = async(e) =>{
        e.preventDefault()
        await axios.post(URL, crearActor)
        window.location.href = '/actores'
    }


    return (
        <div className="container">
            <div className="row d-flex justify-content-center mt-5 ">
                <div className="col-md-6  ">
                    <div className="card px-4 py-3  my-4 card-shadows">
                        <p className="text-center titulo_card_1">Crear Actor</p>
                        
                        <form onSubmit={handleSumit}>
                            <label className="form-label titulo_card_2 " htmlFor="nombre">Nombre completo del autor</label>
                            <input  onChange={handelChange} name="nombre_actor" className="form-control input" type='text' placeholder="James Cameron"  required/>

                            <label className="titulo_card_2" htmlFor="fecha">Fecha de Nacimiento</label>
                            <input onChange={handelChange}  name="fecha_nacimiento" className="form-control input" type='text' placeholder="1 febreo de 1975" required />

                            <select onChange={handelChange}  name="sexo" className="form-select form-select-sm input  mt-3" aria-label=".form-select-sm example">
                            <option selected>Seleccione el sexo</option>
                            <option value="Femenino">Femenino</option>
                            <option value="Masculino">Masculino</option>
                          </select>

                            <label htmlFor="foto">Foto</label>
                            <input onChange={handelChange}  name="foto" className="form-control input" type='text' placeholder="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/5pVJ9SuuO72IgN6i9kMwQwnhGHG.jpg" required />
                            
                            <label htmlFor="foto">Titulo Peliculas</label>
                            <input onChange={handelChange}  name="movies_id" className="form-control input" type='text' placeholder="Agregar titulo de pelicula del actor" required />

                            <button className="btn btn-primary btn-md my-4">Crear Actor</button>
                        </form>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default CrearActor