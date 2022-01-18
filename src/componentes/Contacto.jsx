import React, {Component} from 'react';
import axios from 'axios';

const API_PATH = './enviar_email.php';

// const Contacto = () => (
//     <section className="contacto" id="contacto">
//         <div className="container contacto__container" >
//             <div className="contacto__form--container">
//                 <div className="contacto__izquierda">
//                     <h2 className="tituloDeSeccion contacto__titulo--seccion">Hola!</h2>
//                     <h3 className="contacto__subtitulo--seccion">Escríbenos tu mensaje</h3>
//                     <form className="contacto__form" action="enviar_email.php">
//                         <input className="formulario--item" type="text" name="email" placeholder="Email..." id="email" />
//                         {/* <span className="footer-errores" id="mensaje2">ingrese un email correcto</span> */}
//                         <textarea className="formulario--item" name="comentario" cols="30" rows="6" placeholder="Comentario" id="comentario"></textarea>
//                         {/* <span className="footer-errores" id="mensaje3">ingrese un comentario</span> */}
//                         <div className="footer__form--resultado envio-incorrecto" id="resultado"></div>
//                         <input className="formulario--item boton" type="button" value="Enviar" onclick="validacion()" />
//                         <div className="clear"></div>
//                     </form>
//                 </div>
//                 <div className="contacto__derecha" >
//                     <img className="contacto__imagen" src="../img/contacto.jpg" alt="contacto"/>
//                 </div>
//             </div>   
//         </div>
//     </section>
// )

class Contacto extends Component{

    constructor(props){
        super(props);
        this.state = {
            email: '',
            comentario: '',
            mailSent: false,
            error: null
        }
    }

    handleFormSubmit(e){
        e.preventDefault();
        axios({
            method: 'post',
            url: `${API_PATH}`,
            headers: { 'content-type': 'application/json' },
            data: this.state
        })
            .then(result => {
                this.setState({
                    mailSent: result.data.sent
                })
            })
            .catch(error => this.setState({ error: error.message }));
    }

    render(){
        return(
            <section className = "contacto" id = "contacto" >
                <div className="container contacto__container" >
                    <div className="contacto__form--container">
                        <div className="contacto__izquierda">
                            <h2 className="tituloDeSeccion contacto__titulo--seccion">Hola!</h2>
                            <h3 className="contacto__subtitulo--seccion">Escríbenos tu mensaje</h3>
                            <div>
                                {this.state.mailSent &&
                                    <div>Thank you for contcting us.</div>
                                }
                            </div>
                            <form className="contacto__form">
                                <input 
                                    className="formulario--item" 
                                    type="text" 
                                    name="email" 
                                    placeholder="Email..." 
                                    id="email" 
                                    onChange={ e => this.setState({email: e.target.value})}
                                />
                                {/* <span className="footer-errores" id="mensaje2">ingrese un email correcto</span> */}
                                <textarea 
                                    className="formulario--item" 
                                    name="comentario" 
                                    cols="30" 
                                    rows="6" 
                                    placeholder="Comentario" 
                                    id="comentario"
                                    onChange={e => this.setState({ comentario: e.target.value })}
                                ></textarea>
                                {/* <span className="footer-errores" id="mensaje3">ingrese un comentario</span> */}
                                <div className="footer__form--resultado envio-incorrecto" id="resultado"></div>
                                <input 
                                    className="formulario--item boton" 
                                    type="button" 
                                    value="Enviar"
                                    onClick= {e => this.handleFormSubmit(e)}
                                />
                                <div className="clear"></div>
                            </form>
                        </div>
                        <div className="contacto__derecha" >
                            <img className="contacto__imagen" src="../img/contacto.jpg" alt="contacto" />
                        </div>
                    </div>
                </div>
         </section >
        )
    }
}

export default Contacto;