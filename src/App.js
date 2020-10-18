import React from 'react';
import Banner from './componentes/Banner';
import Footer from './componentes/Footer';
import Header from './componentes/Header';
import Trabajos from './componentes/Trabajos';
import Contacto from './componentes/Contacto';
import './scss/estilos.scss'
function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <main className="main">
        <Trabajos />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}

export default App;
