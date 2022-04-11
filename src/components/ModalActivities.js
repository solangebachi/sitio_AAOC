import React, { Component } from 'react'
import "../assets/css/modalActivities.scss"


export default function Modal(props){
   
        return (
            <>
                <div className={props.showModal ? "modal is-active":"modal"}>
                    <div className="modal-background"></div>
                    <div className="modal-card">
                        <header className="modal-card-head">
                            <p className="modal-card-title bg-skyBlue">26 Y 27 DE NOVIEMBRE</p> <br />
                            <h1 className='title-bold-white is-centered'> Congreso de <br />Residentes AAOC</h1>

                        </header>
                        <section className="modal-card-body">
                            <div className="columns is-mobile">
                                <div className="column is-7"> <h2 className='blue pb-4'> Congreso de <br />Residentes AAOC </h2>
                                    <div className="field is-grouped mt-2">
                                        <p className="control">
                                            <button className="button blue is-small">
                                                EVENTO PAGO
                                            </button>
                                        </p>

                                        <p className="control">
                                            <button className="button bg-skyBlue white is-small">
                                                $1.000
                                            </button>
                                        </p>
                                    </div>

                                    <p className="is-2 skyBlue py-4">
                                        <i className="fa-solid fa-location-dot mr-1"></i> <span>Evento presencial <br />
                                            Villa Carlos Paz, Cordoba.</span>
                                        <div className="control my-2">
                                            <button className="btn-y yelow is-small">
                                                CUPO LIMITADO
                                            </button>
                                        </div>

                                    </p>
                                    <p className="is-2 blue">
                                        <i className="fa-regular fa-circle-user mr-1"></i> <span>Dr. Federico Esteso <br />
                                            Dr. Carlos Peréz</span>

                                    </p>
                                </div>


                                <div className="column is-5">
                                    <div className="field">
                                        <p className="control is-flex is-justify-content-flex-end">
                                            <a className="button is-normal is-info is-outlined bg-white" href="">
                                                <span className='blue'><i className="fa-solid fa-share-nodes mr-2"></i> Compartir evento</span>
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <button onClick={()=>props.setShowModal(!props.showModal)} className="modal-close is-large" aria-label="close"></button>
                        </section>
                        <footer className="modal-card-foot">
                            <button className="button mr-5 blue"><i className="fa-regular fa-calendar mr-1"></i>Agendar evento</button>
                            <button className="button ml-5 bg-gray white">Ya estoy inscripto</button>
                        </footer>
                    </div>
                </div>
                
            </>
        )

}
