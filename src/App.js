import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import About from './Component/About/About';
import Skills from './Component/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Skills />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
