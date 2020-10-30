import React from 'react';
// import contacto_img from '../img/contacto.jpg'

const Contacto = () => (
    <section className="contacto">
        <div className="container contacto__container" >
            <div className="contacto__form--container">
                <div className="contacto__izquierda">
                    <h2 className="tituloDeSeccion contacto__titulo--seccion">Hola!</h2>
                    <h3 className="contacto__subtitulo--seccion">Escríbenos tu mensaje</h3>
                    <form className="contacto__form" action="" method="post" id="formulario">
                        <input className="formulario--item" type="text" name="email" placeholder="Email..." id="email" />
                        {/* <span className="footer-errores" id="mensaje2">ingrese un email correcto</span> */}
                        <textarea className="formulario--item" name="comentario" cols="30" rows="6" placeholder="Comentario" id="comentario"></textarea>
                        {/* <span className="footer-errores" id="mensaje3">ingrese un comentario</span> */}
                        <div className="footer__form--resultado envio-incorrecto" id="resultado"></div>
                        <input className="formulario--item boton" type="button" value="Enviar" onclick="validacion()" />
                        <div className="clear"></div>
                    </form>
                </div>
                <div className="contacto__derecha" >
                    <img className="contacto__imagen" src="../img/contacto.jpg" alt="contacto"/>
                </div>
            </div>   
        </div>
    </section>
)

export default Contacto;