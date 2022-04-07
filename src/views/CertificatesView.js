import React, { useState, useEffect } from 'react';
import "../assets/css/certificates.css"
import Navbar from '../components/Navbar'
import lineBlue from '../assets/img/home/bg_line-100.jpg'

import arrowTitle from '../assets/img/certificados/arrow_yellow.svg'
import certificate1 from '../assets/img/certificados/cert_1.png'
import certificate2 from '../assets/img/certificados/cert_2.png'
import certificate3 from '../assets/img/certificados/cert_3.png'




export default function HomeView() {

    const home = {

    }

    return (
        <>
            <Navbar />
            <main id='certificates' style={home}>
                <section id='sectionPrimary' className='section mb-4'>

                    <div className="columns is-mobile">
                        <div className="column is-6">

                        </div>
                        <div className="column is-6">
                            <h1 className="titleProp">
                                <span className='title-border-white'>MIS</span> <br />
                                <span className='title-bold-white'>CERTIFICADOS <br /> </span>
                            </h1>
                            <img src={arrowTitle} alt="" />
                        </div>


                    </div>
                </section>

                <section id='sectionSecondary' className='section'>
                    <h1 className="titleProp">
                        <div className='text'>
                            <span className='title-border-blue'>TODOS</span> <img src={lineBlue} alt="" />
                            <br />
                            <span className='title-bold-blue'>MIS CERTIFICADOS</span>
                        </div>
                    </h1>
                    <div className="columns is-multiline is-centered">
                        <article className="column is-4">
                            <div className="cont">
                            <figure className='image is-fluid'>
                                <img src={certificate1} alt="" />
                            </figure>


                            <div className="is-flex is-flex-direction-column is-justify-content-space-between px-4 pb-4">
                                <h4 className='subtitle is-5 blue'>Nombre de la actividad
                                    <i class="fa-regular fa-bookmark"></i></h4>
                                <p className="control date">
                                    <span className='button gray'><i class="fa-regular fa-calendar"></i> 10/04/22</span>

                                    <span className='button gray'><i class="fa-regular fa-clock"></i> 16:00hs</span>

                                </p>
                                <hr class="bg-gray mt-5"></hr>
                                <div class="field is-grouped is-flex is-justify-content-space-between">
                                    <p class="control">
                                        <button class="button blue">
                                            Ver más
                                        </button>
                                    </p>

                                    <p class="control">
                                        <button class="button bg-skyBlue white">
                                            Descargar certificado
                                        </button>
                                    </p>
                                </div>
                            </div>

                            </div>
                        </article>
                        <article className="column is-4">
                            <div className="cont">
                            <figure className='image is-fluid'>
                                <img src={certificate2} alt="" />
                            </figure>


                            <div className="is-flex is-flex-direction-column is-justify-content-space-between px-4 pb-4">
                                <h4 className='subtitle is-5 blue'>Nombre de la actividad
                                    <i class="fa-regular fa-bookmark"></i></h4>
                                <p className="control date">
                                    <span className='button gray'><i class="fa-regular fa-calendar"></i> 10/04/22</span>

                                    <span className='button gray'><i class="fa-regular fa-clock"></i> 16:00hs</span>

                                </p>
                                <hr class="bg-gray mt-5"></hr>
                                <div class="field is-grouped is-flex is-justify-content-space-between">
                                    <p class="control">
                                        <button class="button blue">
                                            Ver más
                                        </button>
                                    </p>

                                    <p class="control">
                                        <button class="button bg-skyBlue white">
                                            Descargar certificado
                                        </button>
                                    </p>
                                </div>
                            </div>

                            </div>
                        </article>
                        <article className="column is-4">
                            <div className="cont">
                            <figure className='image is-fluid'>
                                <img src={certificate3} alt="" />
                            </figure>


                            <div className="is-flex is-flex-direction-column is-justify-content-space-between px-4 pb-4">
                                <h4 className='subtitle is-5 blue'>Nombre de la actividad
                                    <i class="fa-regular fa-bookmark"></i></h4>
                                <p className="control date">
                                    <span className='button gray'><i class="fa-regular fa-calendar"></i> 10/04/22</span>

                                    <span className='button gray'><i class="fa-regular fa-clock"></i> 16:00hs</span>

                                </p>
                                <hr class="bg-gray mt-5"></hr>
                                <div class="field is-grouped is-flex is-justify-content-space-between">
                                    <p class="control">
                                        <button class="button blue">
                                            Ver más
                                        </button>
                                    </p>

                                    <p class="control">
                                        <button class="button bg-skyBlue white">
                                            Descargar certificado
                                        </button>
                                    </p>
                                </div>
                            </div>

                            </div>
                        </article>
                    </div>
                </section>




            </main>
            {/* <img src={Logo} alt="" /> */}
        </>
    )
}