import React from 'react';


const Footer = () => (
    <footer className="footer" id="contacto">
        <div className="container footer__container">
            <div className="footer__item contacto">
                {/* <h3 className="footer__titulo">Contactos:</h3> */}
                <ul className="contacto__menu">
                    <li className="contacto__menu--item">@2020 PINOSOFT</li>
                    {/* <li className="contacto__menu--item"><span className="icono icon-ubicacion"></span>Buenos Aires, Argentina</li>
                    <li className="contacto__menu--item"><span className="icono icon-whatsapp"></span>15-6187-0920</li>
                    <li className="contacto__menu--item"><a className="contacto__whatsapp" href="https://api.whatsapp.com/send?phone=5491161870920" target="_blank" rel={'noopener noreferrer'}>WhatsApp</a></li> */}
                </ul>
            </div>
            <div className="footer__item redes">
                <h3 className="footer__titulo">PINOSOFT</h3>
                <div className="redes__contenedor--icono">
                    <a href="https://www.linkedin.com/in/christianperalta87" target="_blank" rel={'noopener noreferrer'}>Inglés</a>
                    <a href="https://github.com/ctnfimac" target="_blank" rel={'noopener noreferrer'}>Español</a>
                 </div>
            </div>
            <div className="footer__item formulario">
            <h3 className="footer__titulo"><span className="icono icon-whatsapp"></span>Buenos Aires, Argentina</h3>
                {/* <h3 className="footer__titulo">Envienos su consulta</h3> */}
                {/* <form className="footer__form" action="" method="post" id="formulario">
                    <input className="formulario--item" type="text" name="email" placeholder="Email*" id="email" />
                    <span className="footer-errores" id="mensaje2">ingrese un email correcto</span>
                    <textarea className="formulario--item" name="mensaje" cols="30" rows="10" placeholder="Mensaje*" id="mensaje"></textarea>
                    <span className="footer-errores" id="mensaje3">ingrese un comentario</span>
                    <div className="footer__form--resultado envio-incorrecto" id="resultado"></div>
                    <input className="formulario--item boton" type="button" value="Enviar" onclick="validacion()" />
                    <div className="clear"></div>
                </form> */}
            </div>
        </div>
        {/* <p className="creditos">2016 - 2020 © Christian Peralta</p> */}
    </footer>
)


export default Footer;

