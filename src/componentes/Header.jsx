import React from 'react';


const Header = () => (
    <header className="header" id="inicio">
        <div className="container">
            <figure className="header__logo">
                {/* <img src="img/logo.png" alt="christian peralta" /> */}
                <span className="header__logo--txt">PINOSOFT</span>
            </figure>
            <figure className="header__boton" id="header__boton">
                <div className="icon icon-bars"></div>
            </figure>
            <div className="clear"></div>
                <nav className="header__nav" id="header__nav">
                    <ul className="header__menu menu">
                        <li className="menu__item"><a className="menu__link menu__link--active" href="#inicio">INICIO</a></li>
                        <li className="menu__item"><a className="menu__link" href="#servicios">SERVICIOS</a></li>
                        <li className="menu__item"><a className="menu__link" href="#trabajos">TRABAJOS</a></li>
                        <li className="menu__item"><a className="menu__link" href="#contacto">CONTACTO</a></li>
                    </ul>
                </nav>
        </div>
    </header>
)

export default Header;