import React, { useState, useEffect } from 'react';
import "../assets/css/billing.scss"
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
            <main id='billing' style={home}>
                <section className='section sectionPrimary'>
                    <div className="columns is-gapless">
                        <div className="column is-three-fifths">
                            <h1 className="titleProp">
                                <span className='title-bold-white text mb-5'> <span className='textLineBlue2'>FACTURACIÓN</span> </span> <br /> <img src={arrowTitle} alt="" width="80px" />
                            </h1>
                        </div>

                    </div>
                </section>

                <section className='section sectionSecondary bg-blue'>
                    <div className="columns is-multiline">
                        <div className="column is-12">
                            <h1 className="titleProp">
                                <div className='text'>
                                    <span className='title-border-white'>DATOS </span>
                                    <br />
                                    <span className='title-bold-white'>DE FACTURACIÓN </span><br />
                                    <img src={lineBlue} alt="" />
                                </div>
                                <div className='btn-title'>
                                    <img src={arrowBtn} alt="" />
                                </div>
                            </h1>
                        </div>

                        <div className="column is-12 ">
                            <p className='white subtitle is-4'>Tipo de membresía: <span className='yelow' >Socio</span></p>
                            <p className='white subtitle is-4'>Tipo de Pago <span className='yelow' >Transferencia</span></p>
                            <p className='white subtitle is-4'>Costo de membresía: <span className='yelow' >$XXX</span></p>
                            <p className='white subtitle is-4'>Deuda: <span className='yelow' >XXX</span></p>
                        </div>
                        <div class="column is-5 field is-grouped is-flex is-justify-content-space-between">
                            <p class="control">
                                <button class="button bg-blue white">
                                    Cambiar método de pago
                                </button>
                            </p>

                            <p class="control">
                                <button class="button bg-white blue">
                                    Cancelar membresia
                                </button>
                            </p>
                        </div>
                    </div>
                </section>
                <section className='section sectionTertiary'>
                    <div className="columns is-multiline">
                        <div className="column is-12">
                            <h1 className="titleProp">
                                <div className='text'>
                                    <span className='title-border-blue'>COMPROBANTES </span>
                                    <br />
                                    <span className='title-bold-blue'>DE <span className='textLineYelow'>PAGO</span></span><br />
                                </div>
                            </h1>
                        </div>
                        <div class=" column is-12 table-container">
                            <table class="table is-striped is-hoverable is-fullwidth">
                                <thead className='bgBlue'>
                                    <th>N° de comprobante</th>
                                    <th>Periodo</th>
                                    <th>Estado</th>
                                    <th>Fecha de vencimiento</th>
                                    <th>Fecha de Emisión</th>
                                    <th>Acción</th>
                                </thead>
                                <tbody>
                                    <td className='bg-lig'>525528</td>
                                    <td className='bg-lig'>Enero</td>
                                    <td className='bg-lig'> Pago</td>
                                    <td className='bg-lig'>11-2-2021</td>
                                    <td className='bg-lig'>11-2-2021</td>
                                    <td className='bg-lig'>Descargar <i class="fa-solid fa-print"></i></td>
                                    <tr></tr>
                                    <td className='bg-dark' >525528</td>
                                    <td className='bg-dark' >Febrero</td>
                                    <td className='bg-dark' >Vencida</td>
                                    <td className='bg-dark' >11-2-2021</td>
                                    <td className='bg-dark' >11-2-2021</td>
                                    <td className='bg-dark' >Descargar <i class="fa-solid fa-print"></i></td>
                                    <tr></tr>
                                    <td className='bg-lig'>525528</td>
                                    <td className='bg-lig'>Enero</td>
                                    <td className='bg-lig'> Pago</td>
                                    <td className='bg-lig'>11-2-2021</td>
                                    <td className='bg-lig'>11-2-2021</td>
                                    <td className='bg-lig'>Descargar <i class="fa-solid fa-print"></i></td>
                                    <tr></tr>
                                    <td className='bg-dark'>525528</td>
                                    <td className='bg-dark'>Febrero</td>
                                    <td className='bg-dark'>Vencida</td>
                                    <td className='bg-dark'>11-2-2021</td>
                                    <td className='bg-dark'>11-2-2021</td>
                                    <td className='bg-dark'>Descargar <i class="fa-solid fa-print"></i></td>

                                </tbody>
                               
                            </table>
                            <div className="field">
                                    <p className="control has-text-centered">
                                        <button className="button">
                                            Ver más <i class="fa-solid fa-circle-plus ml-2"></i>
                                        </button>
                                    </p>
                                </div>

                        </div>

                    </div>
                </section>


            </main>
        </>
    )
}