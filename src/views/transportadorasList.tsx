import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from '../App.tsx'
import { table } from "console";
import api from "../service/api.ts"; //-> importação da conexão com a API do backend


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

  const [transportadora, setTransportadora] = useState([]) //-> useState é um hook ( funcionalidade do React) que vai modificar o "estado" de uma variavel exibida na tela

  let Transportadora = []

  async function getTransportadoras() { //-> Função para acessar o backend
    
  const transportadorasApi = await api.get('/transportadoras')
  
  setTransportadora(transportadorasApi.data)   //-> seleciona apenas o campo data da requisiçao do backend

  }

  useEffect(() =>{

    getTransportadoras()

  }, [])


  return(
  
    <div className="ListaTransportadoras">

          {transportadora.map (transportadora => (  //-> função map: mapeia os componentes do array e exibe todos na tela

            <div className="cardLista" key={transportadora.id} /*-> Key é o componente unico para identificar cada card*/>
            <form action="" method="post">
              <label htmlFor="">Transportadora</label>
              <input type="text" value={transportadora.transportadora} disabled/>
              <label htmlFor="">Motorista</label>
              <input type="text" value={transportadora.motorista} disabled/>
              <label htmlFor="">Placa</label>
              <input type="text" /*value={transportadora.rg_motorista}*/ disabled/>
              <label htmlFor="">Entrada</label>
              <input type="text" value={transportadora.dth_entrada} disabled />
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
