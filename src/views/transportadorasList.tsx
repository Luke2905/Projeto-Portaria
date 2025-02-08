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

  const Transportadora = [
    {
       id: 1, 
      nome: "ABT LOG", 
      motorista: "Jose Alberto", 
      rg_motorista: "0000000", 
      entrada: "03/02/2025 09:34" 
    },
    {
      id: 2, 
      nome: "TRANS REID", 
      motorista: "Alberto", 
      rg_motorista: "88888888", 
      entrada: "03/02/2025 09:34" 
    },
    {
      id: 3, 
      nome: "TRANS DIADEMA", 
      motorista: "Solano Lopez", 
      rg_motorista: "989898989", 
      entrada: "07/02/2025 12:00" 
    }


  ]


  return(
  
    <div className="ListaTransportadoras">

          {Transportadora.map (transportadora => (  //-> função map: mapeia os componentes do array e exibe todos na tela

            <div className="cardLista" key={transportadora.id} /*-> Key é o componente unico para identificar cada card*/>
            <form action="" method="post">
              <label htmlFor="">Transportadora</label>
              <input type="text" value={transportadora.nome} disabled/>
              <label htmlFor="">Motorista</label>
              <input type="text" value={transportadora.motorista} disabled/>
              <label htmlFor="">Placa</label>
              <input type="text" value={transportadora.rg_motorista} disabled/>
              <label htmlFor="">Entrada</label>
              <input type="text" value={transportadora.entrada} disabled />
              <label htmlFor="">Saida</label>
              <input type="datetime-local" />
              <button id="btn-saida" type="submit">
                Registrar Saida
              </button>
            </form>
            </div>

          ))},
    </div>


  )
}
