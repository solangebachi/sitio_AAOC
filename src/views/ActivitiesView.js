import React, { useState, useEffect } from 'react';
import "../assets/css/certificatesAndActivities.scss"
import Navbar from '../components/Navbar'
import Modal from '../components/ModalActivities'
import lineBlue from '../assets/img/home/bg_line-100.jpg'

import arrowTitle from '../assets/img/certificados/arrow_yellow.svg'
import certificate1 from '../assets/img/certificados/cert_1.png'
import certificate2 from '../assets/img/certificados/cert_2.png'
import certificate3 from '../assets/img/certificados/cert_3.png'




export default function ActivitiesView() {

    const [showModal, setShowModal] = useState(false)

    const home = {
        

    }
    return (
        <>
            <Navbar />
            <main id='activities' style={home}>
                <section id='sectionPrimary' className='section mb-4'>

                    <div className="columns is-mobile">
                        <div className="column is-6">

                        </div>
                        <div className="column is-6">
                            <h1 className="titleProp">
                                <span className='title-border-white'>MIS</span> <br />
                                <span className='title-bold-white'><span className='textLineBlue'>ACTIVIDADES </span> <br /> </span>
                            </h1>
                            <img src={arrowTitle} alt="" />
                        </div>


                    </div>
                </section>

                <section id='sectionSecondary' className='section'>
                    <h1 className="titleProp">
                        <div className='text'>
                            <span className='title-border-blue'>ACTIVIDADES</span>
                            <br />
                            <span className='title-bold-blue'>EN LAS QUE <img src={lineBlue} alt="" /> <br /><span className='textLineYelow'> ESTOY</span> SUSCRIPTO</span>
                        </div>
                    </h1>
                    <div className="columns is-multiline is-centered">
                        <article className="column is-4">
                            <div className="cont">
                            <figure className='image is-fluid'>
                                <img src={certificate1} alt="" />
                            </figure>


                            <div className="is-flex is-flex-direction-column is-justify-content-space-between px-4 pb-4 bg-blue">
                                <h4 className='subtitle is-5 white'>Nombre de la actividad</h4>
                                <p className='white mb-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut omnis, enim inventore dolor nihil alias!</p>
                                <p className="control date">
                                    <span className='button yelow'><i class="fa-regular fa-calendar"></i> 10/04/22</span>

                                    <span className='button yelow'><i class="fa-regular fa-clock"></i> 16:00hs</span>

                                </p>
                                <hr class="bg-gray mt-5"></hr>
                                <div class="field is-flex is-justify-content-center">
                                    <p class="control">
                                        <button 
                                        onClick={()=>setShowModal(!showModal)}
                                         class="button blue">
                                            Ver más
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


                            <div className="is-flex is-flex-direction-column is-justify-content-space-between px-4 pb-4 bg-blue">
                                <h4 className='subtitle is-5 white'>Nombre de la actividad</h4>
                                <p className='white mb-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut omnis, enim inventore dolor nihil alias!</p>
                                <p className="control date">
                                    <span className='button yelow'><i class="fa-regular fa-calendar"></i> 10/04/22</span>

                                    <span className='button yelow'><i class="fa-regular fa-clock"></i> 16:00hs</span>

                                </p>
                                <hr class="bg-gray mt-5"></hr>
                                <div class="field is-flex is-justify-content-center">
                                    <a href='/event' class="control">
                                        <button class="button blue">
                                            Ver más
                                        </button>
                                    </a>
                                </div>
                            </div>

                            </div>
                        </article>
                        <article className="column is-4">
                            <div className="cont">
                            <figure className='image is-fluid'>
                                <img src={certificate3} alt="" />
                            </figure>


                            <div className="is-flex is-flex-direction-column is-justify-content-space-between px-4 pb-4 bg-blue">
                                <h4 className='subtitle is-5 white'>Nombre de la actividad</h4>
                                <p className='white mb-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut omnis, enim inventore dolor nihil alias!</p>
                                <p className="control date">
                                    <span className='button yelow'><i class="fa-regular fa-calendar"></i> 10/04/22</span>

                                    <span className='button yelow'><i class="fa-regular fa-clock"></i> 16:00hs</span>

                                </p>
                                <hr class="bg-gray mt-5"></hr>
                                <div class="field is-flex is-justify-content-center">
                                    <a href='/event' class="control">
                                        <button class="button blue">
                                            Ver más
                                        </button>
                                    </a>
                                </div>
                            </div>

                            </div>
                        </article>
                    </div>
                   
                </section>

                <section id='sectionSecondary' className='section bg-skyBlue'>
                    <h1 className="titleProp">
                        <div className='text'>
                            <span className='title-border-white'>ACTIVIDADES</span>
                            <br />
                            <span className='title-bold-white'>EN LAS QUE NO<br /><span className='textLineBlue2'> ESTOY</span> SUSCRIPTO</span>
                        </div>
                    </h1>
                    <div className="columns is-multiline is-centered">
                        <article className="column is-4">
                            <div className="cont">
                            <figure className='image is-fluid'>
                                <img src={certificate1} alt="" />
                            </figure>


                            <div className="is-flex is-flex-direction-column is-justify-content-space-between px-4 pb-4 bg-white">
                                <h4 className='subtitle is-5 blue'>Nombre de la actividad</h4>
                                <p className='blue mb-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut omnis, enim inventore dolor nihil alias!</p>
                                <p className="control date">
                                    <span className='button skyBlue'><i class="fa-regular fa-calendar"></i> 10/04/22</span>

                                    <span className='button skyBlue'><i class="fa-regular fa-clock"></i> 16:00hs</span>

                                </p>
                                <hr class="bg-gray mt-5"></hr>
                                <div class="field is-flex is-justify-content-center">
                                    <p class="control">
                                        <button class="button bg-blue white">
                                            Inscribirme
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


                            <div className="is-flex is-flex-direction-column is-justify-content-space-between px-4 pb-4 bg-white">
                                <h4 className='subtitle is-5 blue'>Nombre de la actividad</h4>
                                <p className='blue mb-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut omnis, enim inventore dolor nihil alias!</p>
                                <p className="control date">
                                    <span className='button skyBlue'><i class="fa-regular fa-calendar"></i> 10/04/22</span>

                                    <span className='button skyBlue'><i class="fa-regular fa-clock"></i> 16:00hs</span>

                                </p>
                                <hr class="bg-gray mt-5"></hr>
                                <div class="field is-flex is-justify-content-center">
                                    <p class="control">
                                        <button class="button bg-blue white">
                                            Inscribirme
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


                            <div className="is-flex is-flex-direction-column is-justify-content-space-between px-4 pb-4 bg-white">
                                <h4 className='subtitle is-5 blue'>Nombre de la actividad</h4>
                                <p className='blue mb-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut omnis, enim inventore dolor nihil alias!</p>
                                <p className="control date">
                                    <span className='button skyBlue'><i class="fa-regular fa-calendar"></i> 10/04/22</span>

                                    <span className='button skyBlue'><i class="fa-regular fa-clock"></i> 16:00hs</span>

                                </p>
                                <hr class="bg-gray mt-5"></hr>
                                <div class="field is-flex is-justify-content-center">
                                    <p class="control">
                                        <button class="button bg-blue white">
                                            Inscribirme
                                        </button>
                                    </p>
                                </div>
                            </div>

                            </div>
                        </article>
                    </div>
                   
                </section>

            </main>
        
           
            
            <Modal showModal={showModal} setShowModal={setShowModal}/> 
            
        
        
        </>
    )
}