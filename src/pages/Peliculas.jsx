import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Pelicula from '../Components/Pelicula'
import axios from 'axios'


const Peliculas = () => {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        fetchMovie()
    }, []);

    const baseUrl = 'http://localhost:3003/api/peliculas/'

    const fetchMovie = async () =>{
        try {
            const res = await axios.get(baseUrl)
            const response = res.data.data
            console.log(response)
            setMovie(response)
        } catch (error) {
            
        }

        
    }

    return (
        <div className='container-fluid mx-4 main-box'>
            <div className="row">
            
            <div className="titulo_1">
                Ordenar Películas 
            </div>

                <div className="col-md-3">
                    <div className="card card-shadows">
                        <div className="card-body">
                            <p className="filtro">
                                Filtros
                            </p>

                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Géneros
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><Link className="dropdown-item" to="/">Action</Link></li>
                                    <li><Link className="dropdown-item" to="/">Another action</Link></li>
                                    <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                                </ul>
                            </div>

                            <form className="d-flex my-4">
                                <input className="form-control me-2" type="search" placeholder="Buscar pelicula" aria-label="Search" />
                                <button className="btn btn-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </div>



                <div className="col-md-9">
                    <div className="row row-cols-1 row-cols-md-4 row-cols-lg-5 g-2 ">

                        {
                            movie.map(item =>(
                                <Pelicula 
                                    key = {item.id}
                                    titulo = {item.titulo}
                                    genero = {item.genero}
                                    fecha = {item.fecha_estreno}
                                    foto = {item.foto}
                                    link = {`/detalle-pelicula/${item.id}`}
                                />

                            ))
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Peliculas