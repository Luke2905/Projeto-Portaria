import React, { useState, useEffect, useRef } from "react";
import { format, parseISO } from "date-fns";
import ReactDOM from "react-dom/client";
import App from '../App.tsx'
import { table } from "console";
import moment from "moment";
import api from "../service/api.ts"; //-> importação da conexão com a API do backend


function TransportadorasLista(){
  
      //-> Recarrega a pagina a cada 30 Segundos
      useEffect(() =>{
          const RecarregaPagina = setTimeout(() => {
              window.location.reload(); //-> Recarrega a pagina
          }, 30000); //-> Tempo: 10 segundos
  
                  // Limpa o timeout caso o componente seja desmontado
                  return () => clearTimeout(RecarregaPagina);
          }, []);

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
  const [filtroTipo, setFiltroTipo] = useState('Todos'); // -> Estado para o Filtro


  let Transportadora = []

  async function getTransportadoras() { //-> Função para acessar o backend
    
  const transportadorasApi = await api.get('/transportadoras')
  
  setTransportadora(transportadorasApi.data)   //-> seleciona apenas o campo data da requisiçao do backend

  }

  useEffect(() =>{

    getTransportadoras()

  }, [])


  const handleChange = (id, value) => { //-> captura o valor do inpute salva no state 
    setSaidas((prev) => ({ ...prev, [id]: value }));
  };

  // Const para filtrar os dados antes de renderizar
  const transportadorasFiltradas = transportadora.filter(item => {
    if (filtroTipo === 'Todos') return true;
    return filtroTipo === 'Coleta' ? item.tipo === 'Coleta' : item.tipo === 'Entrega';
  });

  async function registrarSaida(id) {
    const dataSaida = saidas[id];
    if (!dataSaida) {
      alert("Por favor, insira uma data de saída.");
      return;
    }

    try {
      await api.put(`/edit-transportadoras/${id}`, {
        dth_saida: dataSaida,
      });
      alert("Saída registrada com sucesso!");
    } catch (error) {
      console.error("Erro ao registrar saída:", error);
    }
  }

  return(
<>
    <select onChange={(e) => setFiltroTipo(e.target.value)} value={filtroTipo}>
      <option value="Todos">Todos</option>
      <option value="Coleta">Coleta</option>
      <option value="Entrega">Entrega</option>
    </select>

    <div className="ListaTransportadoras">

        {transportadorasFiltradas.map (transportadora => (  //-> função map: mapeia os componentes do array e exibe todos na tela


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
            </form>
            </div>

          ))},
    </div>

</>
  )
}
