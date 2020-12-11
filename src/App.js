import React from 'react';
import './css/Estilos.css';
import Navbar from './Component/Navbar';
import Hello from './Component/Hello/Hello';
import About from './Component/About';
import Skills from './Component/Skills';
import Projects from './Component/Projects';
import Contact from './Component/Contact';
import Footer from './Component/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hello />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
