import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Conteudo from './views/conteudo.tsx'
import MenuNav from './components/navBar.tsx';
import Botao from './components/button.tsx';
import Abriform from './components/cadastroFrom.tsx';
import FormTransportadoraEntrada from './components/cadastroFrom.tsx';



function App() {
  return (
<div className="layout">
      <MenuNav />
    <main>
    <FormTransportadoraEntrada/>
      <Conteudo />
    </main>
    <footer>
      <p>© 2025 - Todos os Direitos Reservados Amino</p>
    </footer>
  </div>
  );
}

export default App;
