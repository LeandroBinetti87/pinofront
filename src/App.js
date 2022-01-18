import React from 'react';
// import Aptitudes from './componentes/Aptitudes';
import Banner from './componentes/Banner';
import Footer from './componentes/Footer';
import Header from './componentes/Header';
import Trabajos from './componentes/Trabajos';
import Contacto from './componentes/Contacto';
import './scss/estilos.scss'
import Servicios from './componentes/Servicios';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <main className="main">
        {/* <Aptitudes /> */}
        <Servicios />
        <Trabajos />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}

export default App;
