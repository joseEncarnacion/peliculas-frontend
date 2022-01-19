import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AutorDesc from "../Components/ActorDesc";


const DetallesActor = () =>{

    const [dataID, setDataID] = useState([]);
    const {id} = useParams()


    const url = `http://localhost:3003/api/actor/${id}`

    
    useEffect(() => {
        fectActor()
    }, []);

    const fectActor = async()=>{
       const res = await axios.get(url)
       const response = res.data[0]
       console.log(res.data[0])

       setDataID(response)
    }

    
   

    const handelEliminar = async()=>{
         await axios.delete(url)
         alert('Actor eliminado exitosamente')
         window.location.href = '/actores'
    }

    return(
        <div className="container">

        {
            
        }
        <AutorDesc
            key ={dataID.id}
            nombre = {dataID.nombre_actor}
            fecha = {dataID.fecha_nacimiento}
            sexo = {dataID.sexo}
            foto = {dataID.foto}
            eliminar = {handelEliminar}
        />
      
        </div>
    )
}

export default DetallesActor