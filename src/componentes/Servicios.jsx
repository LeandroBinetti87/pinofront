import React from 'react';


const Servicios = () => (
    <section className="servicios seccionMargenInferior" id="servicios">
        <h2 className="tituloDeSeccion servicios__titulo">Nuestros Servicios</h2>
        <div className="container servicios__container">
            <div className="item__container">
                <div className="servicios__item">
                    <span className="icon icon-bug"></span>
                    <h3 className="titulo">SITIOS WEB</h3>
                    <p className="subtitulo">Desarrollamos sitios web 
                        que  funcionan en todos 
                        los dispositivos  utilizando las últimas tecnologías del mercado.
                    </p>
                </div>
                <div className="servicios__item">
                    <span className="icon icon-bug"></span>
                    <h3 className="titulo">MANTENIMIENTO</h3>
                    <p className="subtitulo">Mantenemos y administramos sitios propios y de terceros.
                    </p>
                </div>
                <div className="servicios__item">
                    <span className="icon icon-bug"></span>
                    <h3 className="titulo">GESTIÓN</h3>
                    <p className="subtitulo">Adquirimos y gestionamos dominios de internet y servicios de hosting nacionales e internacionales.
                    </p>
                </div>
                <div className="servicios__item">
                    <span className="icon icon-bug"></span>
                    <h3 className="titulo">DESARROLLO</h3>
                    <p className="subtitulo">Escuchamos su necesidad y diseñamos software y/o hardware específico para brindarle soluciones.
                    </p>
                </div>
            </div>
            <figure className="item__imagen">
                <img src="../img/servicios.png" alt="imagen servicios"/>
            </figure>
        </div>
    </section>
)


export default Servicios;