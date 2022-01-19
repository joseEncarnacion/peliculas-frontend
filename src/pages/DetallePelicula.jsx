import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import InfoID from "../Components/InfoID";


const DetallePeliculas = () =>{

    const [info, setInfo] = useState([]);
    const [apiActor, setapiActor] = useState([]);
    const [newdata, setNewdata] = useState([]);
    const {id} = useParams()

    const url = `http://localhost:3003/api/peliculas/${id}`
    const ActorUrl = 'http://localhost:3003/api/actor/'


    useEffect(() => {
        fectData()
        actores()
        prueba()
        

    }, []);

    const fectData = async()=>{
       const res = await axios.get(url)
       const response = res.data[0]

       setInfo(response)
    }

    const actores = async() =>{
        const response = await axios.get(ActorUrl)
        const resp = response.data.data
        // console.log( resp)
        setapiActor(resp)
    }

//     console.log(apiActor.filter(item => item.movies_id.toUpperCase())  )
//    console.log( `${info.titulo.toUpperCase()}`)

const prueba = async() =>{
    const actorFilter = await apiActor.filter((actor) => actor.movies_id.toUpperCase() === `${info.titulo.toUpperCase()}`);
    const dataActor = actorFilter[0]
    console.log(dataActor.foto);
    setNewdata(dataActor)

}

    
    console.log("estatus 200" + '' + newdata.foto )


    const handelEliminar = async() =>{
        await axios.delete(url)
        alert('Actor eliminado exitosamente')
        window.location.href = '/'
    }


    // console.log('peliculas' + info.titulo)

    return(
        <div className="mt-5 pt-3">
        

        {
            <InfoID 
                titulo = {info.titulo}
                foto = {info.foto}
                fecha = {info.fecha_estreno}
                genero = {info.genero}
                eliminar = {handelEliminar}

                
                actorNombre = {newdata.nombre_actor}
                actorFecha = {newdata.fecha_nacimiento}
                actorFoto = {newdata.foto}


            />
           
        }


       



        </div>
    )
}

export default DetallePeliculas;