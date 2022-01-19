import axios from "axios";
import React, {useState, useEffect} from "react";

const CrearPeliculas = () =>{

    const [crearData, setCrearData] = useState({
        titulo: '',
        genero: '',
        fecha_estreno: '',
        foto: ''
    });

    const handelChange = (e) =>{
        const {name, value} = e.target
        setCrearData({
            ...crearData,
            [name]:value
        })
    }

    const URL = 'http://localhost:3003/api/peliculas/'

    const handleSumit = async(e)=>{
        e.preventDefault();
        await axios.post(URL, crearData)
        window.location.href = '/'
    }

    return(
        <div className="container">
        <div className="row d-flex justify-content-center mt-5 ">
            <div className="col-md-6  ">
                <div className="card  px-4 py-3  my-4 card-shadows">
                    <p className="text-center titulo_card_1">Crear pelicula</p>

                    <form  onSubmit={handleSumit}>
                        <label className="form-label titulo_card_2 " htmlFor="titulo">Titulo de la pelicula</label>
                        <input onChange={handelChange} name="titulo" className="form-control input" type='text' placeholder="titulo pelicula" required />

                        <label className="titulo_card_2" htmlFor="Genero">Titulo de la pelicula</label>
                        <input onChange={handelChange} name="genero" className="form-control input" type='text' placeholder="Genero" required />

                        <label className="titulo_card_2" htmlFor="Genero">Fecha de extreno</label>
                        <input onChange={handelChange} name="fecha_estreno" className="form-control input" type='text' placeholder="1 dicembre 2021" required />

                        <label className="titulo_card_2" htmlFor="Genero">Foto</label>
                        <input onChange={handelChange} name="foto" className="form-control input" type='text' placeholder="Foto"  required/>

                        <button  className="btn btn-primary btn-md my-4">Crear pelicula</button>
                    </form>
                    
                </div>
            
            </div>
        </div>
        </div>
    )
}

export default CrearPeliculas