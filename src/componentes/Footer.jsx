import React from 'react';


const Footer = () => (
    <footer className="footer">
        <div className="container footer__container">
            <div className="footer__item contacto">
                <h3 className="contacto__telefono"><span className="icon icon-telephone"></span>+54 11-6187-0920</h3>
				<h3 className="contacto__telefono"><span className="icon icon-telephone"></span>+54 11-5160-0578</h3>
            </div>
            <div className="footer__item idioma">
                <span className="icon icon-tree idioma__icono"></span>
                <h3 className="idioma__titulo">PINO SOFTWARE</h3>
                {/* <div className="idioma__paises">
                    <a href="https://pinosoft.com.ar/" target="_blank" rel={'noopener noreferrer'}>Inglés</a>
                    <a href="https://pinosoft.com.ar/" target="_blank" rel={'noopener noreferrer'}>Español</a>
                 </div> */}
            </div>
            <div className="footer__item firma">
                <ul className="firma__menu">
                    <li className="firma__menu--item">@2021 PINO SOFTWARE</li>
					<li className="firma__menu--item">info@pinosoftware.com</li>
                </ul>
            </div>
        </div>
    </footer>
)


export default Footer;

