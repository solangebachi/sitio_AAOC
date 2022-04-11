import React, { Component } from 'react'
import Logo from '../assets/img/navbar/logo.svg'
class Modal extends Component {
    render() {

        return (
            <>
                <div class="modal is-active">
                    <div class="modal-background"></div>
                    <div class="modal-card">
                        <header class="modal-card-head">
                            <p class="modal-card-title bg-skyBlue">26 Y 27 DE NOVIEMBRE</p> <br />
                            <h1 className='title-bold-white is-centered'> Congreso de <br />Residentes AAOC</h1>

                        </header>
                        <section class="modal-card-body">
                            <div className="columns is-mobile">
                                <div className="column is-7"> <h2 className='blue pb-4'> Congreso de <br />Residentes AAOC </h2>
                                    <div class="field is-grouped mt-2">
                                        <p class="control">
                                            <button class="button blue is-small">
                                                EVENTO PAGO
                                            </button>
                                        </p>

                                        <p class="control">
                                            <button class="button bg-skyBlue white is-small">
                                                $1.000
                                            </button>
                                        </p>
                                    </div>

                                    <p class="is-2 skyBlue py-4">
                                        <i class="fa-solid fa-location-dot mr-1"></i> <span>Evento presencial <br />
                                            Villa Carlos Paz, Cordoba.</span>
                                        <div className="control my-2">
                                            <button class="btn-y yelow is-small">
                                                CUPO LIMITADO
                                            </button>
                                        </div>

                                    </p>
                                    <p class="is-2 blue">
                                        <i class="fa-regular fa-circle-user mr-1"></i> <span>Dr. Federico Esteso <br />
                                            Dr. Carlos Peréz</span>

                                    </p>
                                </div>


                                <div className="column is-5">
                                    <div className="field">
                                        <p className="control is-flex is-justify-content-flex-end">
                                            <a className="button is-normal is-info is-outlined bg-white" href="">
                                                <span className='blue'><i class="fa-solid fa-share-nodes mr-2"></i> Compartir evento</span>
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <button class="modal-close is-large" aria-label="close"></button>
                        </section>
                        <footer class="modal-card-foot">
                            <button class="button mr-5 blue"><i class="fa-regular fa-calendar mr-1"></i>Agendar evento</button>
                            <button class="button ml-5 bg-gray white">Ya estoy inscripto</button>
                        </footer>
                    </div>
                </div>
            </>
        )
    }
}

export default Modal;