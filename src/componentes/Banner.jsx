import React from 'react';
import banner from '../img/banner.jpg'


const Banner = () => (
    <section className="banner seccionMargenInferior" style={{ backgroundImage: "url(" + banner + ")"}}>
        <div className="banner__frente"></div>
        <div className="container banner__container" >
            {/* <figure className="banner__figura"><img className="banner__figura--imagen" src="img/banner.jpg" alt="" /></figure> */}
            <div className="banner__descripcion">
                <h1 className="banner__descripcion--titulo">Desarrollo de Software y Hardware a Medida</h1>
                <h2 className="banner__descripcion--subtitulo">Haciendo realidad sus ideas y sueños</h2>
                <a className="banner__descripcion--boton" href="#precios">Saber Más</a>
            </div>
        </div>
    </section>
)


export default Banner;