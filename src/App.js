import logo from './logo.svg';
import './App.css';
import Conteudo from './views/conteudo'
import MenuNav from './components/navBar';
import Botao from './components/button'
import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('');
  useEffect(() => {
    fetch('http://localhost:5000/')
      .then(response => response.text())
      .then(data => setMessage(data));
  }, []);
  return (
    <div className="layout">
      <MenuNav />
    <header>
      <h1>Projeto Portaria</h1>
      <div class="ActionButton">
      <input id='CadTransportadora' type="button"/>
      </div>
    </header>
    <main>
      <Conteudo />
    </main>
    <footer>
      <p>© 2025 - Todos os Direitos Reservados Amino</p>
    </footer>
  </div>

  );
}

export default App;
