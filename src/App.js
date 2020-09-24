import React from 'react';
import Navbar from './Component/Navbar/Navbar';
import Hello from './Component/Hello/Hello';
import About from './Component/About/About';
import Skills from './Component/Skills/Skills';
import Projects from './Component/Projects/Projects';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';

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
