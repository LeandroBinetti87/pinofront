import React from 'react';


const Footer = () => (
    <footer className="footer">
        <div className="container footer__container">
            <div className="footer__item contacto">
                <h3 className="contacto__telefono"><span className="icon icon-telephone"></span>15-6187-0000</h3>
            </div>
            <div className="footer__item idioma">
                <span className="icon icon-tree idioma__icono"></span>
                <h3 className="idioma__titulo">PINOSOFT</h3>
                <div className="idioma__paises">
                    <a href="https://pinosoft.com.ar/" target="_blank" rel={'noopener noreferrer'}>Inglés</a>
                    <a href="https://pinosoft.com.ar/" target="_blank" rel={'noopener noreferrer'}>Español</a>
                 </div>
            </div>
            <div className="footer__item firma">
                <ul className="firma__menu">
                    <li className="firma__menu--item">@2020 PINOSOFT</li>
                </ul>
            </div>
        </div>
    </footer>
)


export default Footer;

