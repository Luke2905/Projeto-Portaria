import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Conteudo from './views/conteudo.tsx'
import MenuNav from './components/navBar.tsx';
import Botao from './components/button.tsx';
import Abriform from './components/cadastroFrom.tsx';
import Login from './views/login.tsx';
import FormTransportadoraEntrada from './components/cadastroFrom.tsx';
import TransportadorasLista from './views/transportadorasList.tsx';
import PainelPatio from './views/patioPainel.tsx';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from './service/authContext.js';
import RelatorioTransp from './views/relatorioTransportadora.tsx';



export default function App() {
  return (
<div className="layout">
  <BrowserRouter> {/* -> Busca as rotas*/}
      <MenuNav />
    <main>
      <Routes> {/*-> instancia as rotas no Main do App */}
        <Route  index element={<Conteudo/>}/>
        <Route path='home' element={<Conteudo/>}/>
        <Route path='login' element={<Login/>}></Route>
        <Route path='transportadoras' element={<TransportadorasLista/>}/> {/*Conteudo da pagina na rota */}
        <Route path='patio' element={<PainelPatio/>}/>      
        <Route path='relatorio' element={<RelatorioTransp/>}/>      
      </Routes>
    </main>
  
  </BrowserRouter>
    <footer>
      <p>
        Desenvolvido por Lucas Laranjeira - © 2025 Todos os Direitos Reservados - 
        <a href='https://www.amino.com.br/'> Amino</a>
      </p>
    </footer>
  </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
