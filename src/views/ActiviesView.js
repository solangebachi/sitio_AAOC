import React, { useState, useEffect } from 'react';
import "../assets/css/certificatesAndActivies.css"
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
            <main id='activies' style={home}>
                <section id='sectionPrimary' className='section mb-4'>

                    <div className="columns is-mobile">
                        <div className="column is-6">

                        </div>
                        <div className="column is-6">
                            <h1 className="titleProp">
                                <span className='title-border-white'>MIS</span> <br />
                                <span className='title-bold-white'>ACTIVIDADES <br /> </span>
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
                            <span className='title-bold-blue'>EN LAS QUE ESTOY SUSCRIPTO</span>
                        </div>
                    </h1>
                   
                </section>




            </main>
            {/* <img src={Logo} alt="" /> */}
        </>
    )
}