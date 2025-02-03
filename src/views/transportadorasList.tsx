import React, { useState } from "react";
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

  const Transportadora = { id: 1, nome: "ABT LOG", motorista: "Jose Alberto", rg_motorista: "0000000", entrada: "03/02/2025 09:34" }


  return(

    <div className="ListaTransportadoras">
      <div className="cardLista">
        <form action="" method="post">
          <label htmlFor="">Transportadora</label>
          <input type="text" value={Transportadora.nome} disabled/>
          <label htmlFor="">Motorista</label>
          <input type="text" value={Transportadora.motorista} disabled/>
          <label htmlFor="">Placa</label>
          <input type="text" value={Transportadora.rg_motorista} disabled/>
          <label htmlFor="">Entrada</label>
          <input type="text" value={Transportadora.entrada} disabled />
          <label htmlFor="">Saida</label>
          <input type="datetime-local" />
          <button id="btn-saida" type="submit" value={Transportadora.id}>
            Registrar Saida
          </button>
        </form>
      </div>
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
