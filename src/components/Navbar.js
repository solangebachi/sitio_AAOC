import React, { Component } from 'react'
import "../assets/css/navbar.scss"
import Logo from '../assets/img/navbar/logo.svg'
import tvIcon from '../assets/img/navbar/tv_navbar.svg'

class Navbar extends Component {
    render() {

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

                                <a href="/" className="navbar-item">
                                    <span>Inicio</span>
                                </a>
                                <a href="/porfile" className="navbar-item">
                                    <span>Mi Perfil</span>
                                </a>
                                <a href="/activities" className="navbar-item">
                                    <span>Mis Actividades</span>
                                </a>
                                <a href="/certificates" className="navbar-item">
                                    <span>Certificados</span>
                                </a>
                                <a href="/billing" className="navbar-item">
                                    <span>Facturación</span>
                                </a>

                                <a href="/event" id='tvItem' className="navbar-item">
                                    <span className="icon-text">
                                        <span className="icon mr-2">
                                            <i class="fa-solid fa-tv"></i>

                                        </span>
                                        <span className='mb-1'>AAOC Tv</span>
                                    </span>
                                </a>
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
            </>
        )
    }
}

export default Navbar;