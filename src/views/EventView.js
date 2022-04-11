import React, { useState, useEffect } from 'react';
import Modal from '../components/Modal'
import Logo from '../assets/img/navbar/logo.svg'

export default function EventView() {

    const eventContainer = {
        height: "100vh"

    }

    return (
        <>
            <header id="menuNav" className="container is-fluid">
                    <nav className="navbar py_5" role="navigation" aria-label="main navigation">
                        <div className="navbar-brand ml-2">
                            <a className="navbar-item" href="/">
                                <img src={Logo} />
                            </a>

                            <a role="button" className="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                            </a>
                        </div>
                        <div className="navbar-menu mr-2" id="navMenu">

                            <div className="navbar-end py-5">
                                <a href="/login" id='userItem' className="navbar-item bg-blue">
                                    <span className="icon-text">

                                        <span className="icon mr-1">
                                            <i className="fa-regular fa-circle-user white"></i>    
                                        </span>
                                        <span className='white mb-1'>Nombre Usuario</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </nav>
                </header>
            <main id='event' className='bg-blue' style={eventContainer}>
                
                <Modal />
                


            </main>
        </>
    )
}