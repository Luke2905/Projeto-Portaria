import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Conteudo from './views/conteudo.tsx'
import MenuNav from './components/navBar.tsx';
import Botao from './components/button.tsx';
import Abriform from './components/cadastroFrom.tsx';
import FormTransportadoraEntrada from './components/cadastroFrom.tsx';
import TransportadorasLista from './views/transportadorasList.tsx';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";



export default function App() {
  return (
<div className="layout">
  <BrowserRouter> {/* -> Busca as rotas*/}
      <MenuNav />
    <main>
      <Routes> {/*-> instancia as rotas no Main do App */}
        <Route  index element={<Conteudo/>}/>
        <Route path='transportadoras' element={<TransportadorasLista/>}/> {/*Conteudo da pagina na rota */}
      </Routes>
    </main>
  
  </BrowserRouter>
    <footer>
      <p>© 2025 - Todos os Direitos Reservados Amino</p>
    </footer>
  </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
