import React from "react";
import {Link} from 'react-router-dom'

const InfoID = (props) => {




    const { foto, titulo, fecha, genero, eliminar, actorNombre, actorFecha, actorFoto } = props
    return (
        <div className="container-fluid">
            <div className="container">
                <div className="row ">

                    <div className="card-infoID">
                        <div className="col-12 col-sm-8 col-md-6 col-lg-5 id_img_box">
                            <img className="card-img id_img  " src={foto} alt="" />
                        </div>

                        <div className="col-12 col-md-6">
                            <p className="titulo_1 p-0 m-0"> {titulo} </p>
                            <span className="subtitulo_1 ">Extreno: {fecha} </span>
                            <span className="subtitulo_1"> {genero} </span>

                            <div className="botones">
                                <p className="titulo_2 py-4">
                                    Opciones:
                                </p>



                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                    Eliminar Actor
                                </button>


                                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                Seguro desea proceder con la eliminacion permanete del Actor
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="button" onClick={eliminar} className="btn btn-primary">Eliminar</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>


                </div>

                <div className="row mt-5 pt-5 ">
                    <p className="titulo_1">Reparto principal</p>


                    <div className="card my-3 mx-3 p-0 card-shadows">
                        <Link to >
                            <img src= {actorFoto} className="card-img-top " alt="foto actor" />

                        </Link>
                        <div className="card-body">
                            <div className=" titulo_2">  {actorNombre}  </div>

                            <p className="subtitulo_1"> {actorFecha}  </p>
                        </div>
                    </div>

                </div>






            </div>
        </div>
    )
}

export default InfoID;
