import React, { useState, useEffect } from 'react';
import "../assets/css/home.css"
import Navbar from '../components/Navbar'

import arrowTitle from '../assets/img/home/arrow_rigth.svg'
import arrowBtn from '../assets/img/home/arrow_bottom.svg'
import lineBlue from '../assets/img/home/bg_line-100.jpg'
import postDestacado from '../assets/img/home/post_destacado_1.png'
import post1 from '../assets/img/home/post_1.png'
import post2 from '../assets/img/home/post_2.png'
import post3 from '../assets/img/home/post_3.png'

export default function HomeView() {

    const home = {

    }

    return (
        <>
            <Navbar />
            <main id='home' style={home}>
                <section id='sectionPrimary' className='section mb-4'>

                    <div className="columns is-gapless is-mobile">
                        <div className="column is-7">
                            <h1 className="titleProp">
                                <span className='title-border-white'>PRECEPTORÍA</span> <br />
                                <span className='title-bold-white'>SISTEMA NERVIOSO <br /> CENTRAL <img src={arrowTitle} alt="" width="80px" /> </span>
                            </h1>
                            <p className='white pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit, quos culpa, atque incidunt, est adipisci iste alias accusamus molestiae vero numquam aspernatur, eligendi sunt blanditiis.</p>
                            <div id='btn-more' className="field">
                                <p className="control">
                                    <a className="button is-normal bg-white" href="">
                                        <span className='blue'>Saber más</span>
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="column is-5">

                        </div>

                    </div>


                </section>

                <section id='sectionSecondary' className='section mt-4'>
                    <div className="columns mb-0 is-gapless is-centered">
                        <div className="column is-8">
                            <h1 className="titleProp">
                                <div className='text'>
                                    <span className='title-border-blue'>CONOZCA </span> <img src={lineBlue} alt="" />
                                    <br />
                                    <span className='title-bold-blue'>LAS ACTIVIDADES </span>
                                </div>
                                <div className='btn-title'>
                                    <img src={arrowBtn} alt="" />
                                </div>
                            </h1>
                        </div>
                    </div>

                    <div id='containerPosts' className="columns">
                        <div className="column is-6">
                            <p className='blue subtitle is-6'>Actividad destacada</p>
                            <figure className='image is-2by1'>
                                <img src={postDestacado} alt="" />
                            </figure>
                            <div className="bg-blue p-5">
                                <h3 className='subtitle is-5'>Nombre de la actividad</h3>
                                <p className='white'>Lorem ipsum dolor sit amet consectetur adipisicing elit, quos culpa, atque incidunt, est adipisci iste alias accusamus molestiae vero numquam aspernatur, eligendi sunt blanditiis.</p>

                                <div id='btnPost' className="field is-grouped">
                                    <p className="control date">
                                        <span className='button yelow'><i class="fa-regular fa-calendar"></i> 10/04/22</span>

                                        <span className='button yelow'><i class="fa-regular fa-clock"></i> 16:00hs</span>

                                    </p>
                                    <p className="control">
                                        <a className="button is-normal bg-white" href="">
                                            <span className='blue'>Inscribirse</span>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div id='listPost' className="column is-6">
                            <p className='blue subtitle is-6'>Próximas actividades</p>

                            <div className="columns is-multiline is-gapless">
                                {/* Column Dinamic */}
                                <article className="column is-12">
                                    <div className='is-flex is-flex-direction-row'>
                                        <img src={post1} alt="" width="137" />
                                        <div className="is-flex is-flex-direction-column is-justify-content-space-between pl-4">
                                            <h4 className='subtitle is-5 blue'>Nombre de la actividad</h4>
                                            <p className="control date">
                                                <span className='button gray'><i class="fa-regular fa-calendar"></i> 10/04/22</span>

                                                <span className='button gray'><i class="fa-regular fa-clock"></i> 16:00hs</span>

                                            </p>
                                            <a className="skyBlue icon-text" href="">
                                            <span>Leer más</span>
                                                <span class="icon">
                                                <i class="fa-solid fa-arrow-right-long"></i>
                                                </span>
                                                
                                            </a>
                                        </div>
                                    </div>
                                    <hr class="bg-gray mt-5"></hr>
                                </article>
                                <article className="column is-12">
                                    <div className='is-flex is-flex-direction-row'>
                                        <img src={post2} alt="" width="137" />
                                        <div className="is-flex is-flex-direction-column is-justify-content-space-between pl-4">
                                            <h4 className='subtitle is-5 blue'>Nombre de la actividad</h4>
                                            <p className="control date">
                                                <span className='button gray'><i class="fa-regular fa-calendar"></i> 10/04/22</span>

                                                <span className='button gray'><i class="fa-regular fa-clock"></i> 16:00hs</span>

                                            </p>
                                            <a className="skyBlue icon-text" href="">
                                            <span>Leer más</span>
                                                <span class="icon">
                                                <i class="fa-solid fa-arrow-right-long"></i>
                                                </span>
                                                
                                            </a>
                                        </div>
                                    </div>
                                    <hr class="bg-gray mt-5"></hr>
                                </article>
                                <article className="column is-12">
                                    <div className='is-flex is-flex-direction-row'>
                                        <img src={post3} alt="" width="137" />
                                        <div className="is-flex is-flex-direction-column is-justify-content-space-between pl-4">
                                            <h4 className='subtitle is-5 blue'>Nombre de la actividad</h4>
                                            <p className="control date">
                                                <span className='button gray'><i class="fa-regular fa-calendar"></i> 10/04/22</span>

                                                <span className='button gray'><i class="fa-regular fa-clock"></i> 16:00hs</span>

                                            </p>
                                            <a className="skyBlue icon-text" href="">
                                            <span>Leer más</span>
                                                <span class="icon">
                                                <i class="fa-solid fa-arrow-right-long"></i>
                                                </span>
                                                
                                            </a>
                                        </div>
                                    </div>
                                   
                                </article>
                            </div>
                        </div>
                    </div>
                </section>


            </main>
            {/* <img src={Logo} alt="" /> */}
        </>
    )
}