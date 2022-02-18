import React from 'react';


const Header = () => (
    <header className="header" id="inicio">
        <div className="container">
            <figure className="header__logo">
                <span className="header__logo--txt">PINO SOFTWARE</span>
            </figure>
                <input className="header__checkbox" type="checkbox" name="icon_bar" id="icon_bar" />
                <label htmlFor="icon_bar"><div className="icon icon-bars"></div></label>
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