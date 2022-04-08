import React, { useState, useEffect } from 'react';
import "../assets/css/register.css"
import Navbar from '../components/Navbar'
import Logo from '../assets/img/navbar/logo.svg'
import arrowTitle from '../assets/img/registro/arrow_title.svg'

export default function HomeView() {
    const home = {

        backgroundColor: "#ffffff"
    }

    return (
        <>
            <Navbar />

            <main id='porfile'>
                <section className='section'>

                    <div className="columns is-centered">
                        <div className="column is-4">
                            <h1 className="titleProp">
                                <span className='title-border-white'>MI</span> <br /> <span className='title-border-white'>PERFIL</span> <br />
                                <img src={arrowTitle} alt="" width="50px" />
                            </h1>
                        </div>
                        <form className="column is-8 my-5">
                            <div className="columns is-multiline is-centered">
                                <div className="field column is-12 header-form">
                                    <div class="control">
                                        <label class="radio mb-3">
                                            <input type="radio" name="foobar" />
                                            Deseo hacerme socio (costo xxx por mes)
                                        </label>

                                    </div>
                                    <div class="control">
                                        <label class="radio">
                                            <input type="radio" name="foobar" />
                                            No deseo hacerme socio
                                        </label>

                                    </div>
                                </div>
                                <div className="field column is-6">
                                    <p className="control">
                                        <input className="input" type="text" placeholder="Nombre" />
                                    </p>
                                </div>
                                <div className="field column is-6">
                                    <p className="control">
                                        <input className="input" type="text" placeholder="Apellido" />
                                    </p>
                                </div>
                                <div className="field column is-6">
                                    <p className="control">
                                        <input className="input" type="email" placeholder="Email" />
                                    </p>
                                </div>
                                <div className="field column is-6">
                                    <p className="control">
                                        <input className="input" type="text" placeholder="DNI" />
                                    </p>
                                </div>
                                <div className="field column is-6">
                                    <p className="control">
                                        <input className="input" type="password" placeholder="Contaseña" />
                                    </p>

                                </div>
                                <div className="field column is-6">
                                    <p className="control">
                                        <input className="input" type="password" placeholder="Repetir contaseña" />
                                    </p>

                                </div>
                                <div className="field column is-6">
                                    <p className="control">
                                        <input className="input" type="text" placeholder="Sexo" />
                                    </p>
                                </div>
                                <div className="field column is-6">
                                    <p className="control">
                                        <input className="input" type="text" placeholder="Celular" />
                                    </p>
                                </div>
                                <div className="field column is-12">
                                    <p className="control">
                                        <input className="input" type="text" placeholder="Dirección" />
                                    </p>
                                </div>
                                <div className="field column is-6">
                                    <p className="control">
                                        <input className="input" type="text" placeholder="País" />
                                    </p>
                                </div>
                                <div className="field column is-6">
                                    <p className="control">
                                        <input className="input" type="text" placeholder="Provincia" />
                                    </p>
                                </div>
                                <div className="field column is-6">
                                    <p className="control">
                                        <input className="input" type="text" placeholder="Titulo" />
                                    </p>
                                </div>
                                <div className="field column is-6">
                                    <p className="control">
                                        <input className="input" type="text" placeholder="Profesión" />
                                    </p>
                                </div>
                                <div className="field column is-12">
                                    <p className="control">
                                        <input className="input" type="text" placeholder="Especialidad" />
                                    </p>
                                </div>
                                <div className="field column is-12 pb-5">
                                    <p className="control">
                                        <input className="input" type="text" placeholder="Lugar de trabajo" />
                                    </p>
                                </div>

                            </div>


                            <div className="field column is-12 fot-register">
                                <p className="control">
                                    <button className="button is-fullwidth">
                                        Aceptar
                                    </button>
                                </p>
                            </div>

                        </form>

                    </div>


                </section>
            </main>

        </>
    )
}