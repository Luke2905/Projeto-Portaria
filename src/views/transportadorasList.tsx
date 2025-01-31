import React from "react";
import ReactDOM from "react-dom/client";
import App from '../App.tsx'
import { table } from "console";







function TransportadorasLista(){

  return(
    <div className="TransportadorasBody">
      <header>
        <h1>Transportadoras</h1>
      </header>
      <div className="TransportadoraConteudo">
      <Lista/>
      </div>
    </div>
  )

} 

export default TransportadorasLista;

function Lista() {  

  return(

    <div className="ListaTransportadoras">
      <div className="cardLista"></div>
      <div className="cardLista"></div>
      <div className="cardLista"></div>
      <div className="cardLista"></div>
      <div className="cardLista"></div>
      <div className="cardLista"></div>
      <div className="cardLista"></div>
      <div className="cardLista"></div>
      <div className="cardLista"></div>
      <div className="cardLista"></div>

    </div>


  )
}