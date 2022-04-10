import React, { useState, useEffect } from 'react';
import "../assets/css/login.scss"

import Logo from '../assets/img/navbar/logo.svg'
import arrowTitle from '../assets/img/login/arrow_yelow_1.svg'

export default function HomeView() {
    const home = {

        backgroundColor: "#ffffff"
    }

    return (
        <>
            {/* <Navbar /> */}
            <header id="menuNav" className="container is-fluid">
                <nav className="navbar py_5" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand ml-2">
                        <a className="navbar-item" href="#">
                            <img src={Logo} width="150" height="150" />
                        </a>

                        <a role="button" className="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>
                    <div className="navbar-menu mr-2" id="navMenu">

                    </div>
                </nav>
            </header>

            <main id='login'>
                <section className='section mb-4'>

                    <div className="columns is-centered">
                        <div className="column is-6">
                            <h1 className="titleProp">
                                <span className='title-border-white'>INICIAR</span> <br />
                                <span className='title-bold-white'>SESIÓN <br /> <img src={arrowTitle} alt="" width="50px" /> </span>
                            </h1>
                        </div>
                        <form className="column is-6">
                            <div className="field">
                                <p className="control">
                                    <input className="input is-medium mb-5" type="email" placeholder="Email" />
                                </p>
                            </div>
                            <div className="field">
                                <p className="control has-icons-right">
                                    <input className="input mb-3 is-medium" type="password" placeholder="Contaseña" />
                                        <span className="icon is-small is-right">
                                        <i class="fas fa-eye"></i>
                                        </span>
                                </p>
                                <p className='control is-flex is-justify-content-flex-end'>
                                <span class="help is-light">Olvidé mi contraseña</span>
                                </p>
                                
                            </div>
                            <div className="field is-grouped is-grouped-centered">
                                <p className="control">
                                    <button className="button bg-white blue">
                                        Iniciar sesión
                                    </button>
                                </p>
                            </div>
                            <span class="mt-5 help is-light">¿Primera vez aquí? <a href='/signup' className='yelow'>Registrate ahora.</a></span>
                        </form>

                    </div>


                </section>
            </main>

        </>
    )
}