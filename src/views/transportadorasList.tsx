import React, { useState, useEffect, useRef } from "react";
import { format, parseISO } from "date-fns";
import ReactDOM from "react-dom/client";
import App from '../App.tsx'
import { table } from "console";
import moment from "moment";
import api from "../service/api.ts"; //-> importação da conexão com a API do backend
import {motion} from 'framer-motion'; //-> biblioteca para animações
import bootbox from 'bootbox';

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
  const [saidas, setSaidas] = useState({}); // Estado para armazenar as saídas digitadas
  const [observacoes, setObserv] = useState({})
  const [filtroTipo, setFiltroTipo] = useState('Todos'); // -> Estado para o Filtro


  let Transportadora = []

  async function getTransportadoras() { //-> Função para acessar o backend
    
  const transportadorasApi = await api.get('/transportadoras')
  
  setTransportadora(transportadorasApi.data)   //-> seleciona apenas o campo data da requisiçao do backend

  }

  async function alertaTransportadora() {
    try {
      const transportadorasApi = await api.get('/novatransportadora');
      
      // Verifica se a resposta da API está ok
      if (transportadorasApi.status === 200) {
        alert(`Nova entrada de transportadora`);
      } else {
        console.log("Nenhuma entrada de transportadora");
      }
    } catch (error) {
      console.log("Nenhuma entrada de transportadora");
    }
  }
  

  useEffect(() =>{

    getTransportadoras()
    const intervalo = setInterval(() => {
      alertaTransportadora()
    }, 15000);

  }, [])


  const handleChange = (id, value) => { //-> captura o valor do inpute salva no state 
    setSaidas((prev) => ({ ...prev, [id]: value }));

  };

  const observChange = (id, value) => { //-> captura o valor do inpute salva no state 
    setObserv((prev) => ({ ...prev, [id]: value }));
  };

  // Const para filtrar os dados antes de renderizar
  const transportadorasFiltradas = transportadora.filter(item => {
    if (filtroTipo === 'Todos') return true;
    return filtroTipo === 'Coleta' ? item.tipo === 'Coleta' : item.tipo === 'Entrega';
  });

  async function registrarSaida(id) {
    const dataSaida = saidas[id];
    const observacaoSaida = observacoes[id];

    if (!dataSaida) {
      alert("Por favor, insira uma data de saída.");
      return;
    }

    try {
      await api.put(`/edit-transportadoras/${id}`, {
        dth_saida: dataSaida,
        observacao: observacaoSaida,
      });
      alert("Saída registrada com sucesso!");
    } catch (error) {
      console.error("Erro ao registrar saída:", error);
    }
  }

  return(
<>

    <select className="filtroTransp" onChange={(e) => setFiltroTipo(e.target.value)} value={filtroTipo}>
      <option value="Todos">Todos</option>
      <option value="Coleta">Coleta</option>
      <option value="Entrega">Entrega</option>
    </select>

    <div className="ListaTransportadoras">


      {transportadorasFiltradas.map (transportadora => (  //-> função map: mapeia os componentes do array e exibe todos na tela
      
      <div>
          <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
              duration: 1.5,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
           }}
          >
                       <div className={`cardLista ${transportadora.tipo == "Entrega" ? "Entrega" : "Coleta"}`} key={transportadora.id} /*-> Key é o componente unico para identificar cada card*/>
        <form>
          <label htmlFor="">Transportadora</label>
          <input type="text" value={transportadora.transportadora} disabled/>
          <label htmlFor="">Motorista</label>
          <input type="text" value={transportadora.motorista} disabled/>
          <label htmlFor="">Placa</label>
          <input type="text" value={transportadora.placa} disabled/>
          <label htmlFor="">Entrada</label>
          <input type="text" value={moment(transportadora.dth_entrada).format('DD/MM/YYYY HH:mm')} disabled/*-> moment é uma biblioteca para formatação de data, use junto com o format*/ /> 
          <label htmlFor="">Saida</label>
          <input type="datetime-local" value={saidas[transportadora.id] || ""} onChange={(e) => handleChange(transportadora.id, e.target.value)} required/>
          <button id="btn-saida" onClick={() => registrarSaida(transportadora.id)}>
            Registrar Saida
          </button>
          <input id="obsrv" type="text" placeholder="Observação..." value={observacoes[transportadora.id] || ""} onChange={(e) => observChange(transportadora.id, e.target.value)} ></input>
        </form>
        </div>
      </motion.div>

      </div>
       

        ))},

    </div>

</>
  )
}
