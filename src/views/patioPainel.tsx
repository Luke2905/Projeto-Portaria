import React, { useState, useEffect, useRef } from "react";
import { format, parseISO } from "date-fns";
import ReactDOM from "react-dom/client";
import App from '../App.tsx'
import { table } from "console";
import moment from "moment";
import api from "../service/api.ts"; //-> importação da conexão com a API do backend


function PainelPatio() {

  //-> Recarrega a pagina a cada 30 Segundos
  useEffect(() => {
    const RecarregaPagina = setTimeout(() => {
      window.location.reload(); //-> Recarrega a pagina
    }, 30000); //-> Tempo: 60 segundos

    // Limpa o timeout caso o componente seja desmontado
    return () => clearTimeout(RecarregaPagina);
  }, []);


  const [transportadora, setTransportadora] = useState([]) //-> useState é um hook ( funcionalidade do React) que vai modificar o "estado" de uma variavel exibida na tela
  const [saidas, setSaidas] = useState({}); // Estado para armazenar as saídas digitadas
  const [filtroTipo, setFiltroTipo] = useState('Todos'); // -> Estado para o Filtro


  let Transportadora = []

  async function getTransportadoras() { //-> Função para acessar o backend

    const transportadorasApi = await api.get('/transportadoras')

    setTransportadora(transportadorasApi.data)   //-> seleciona apenas o campo data da requisiçao do backend

  }

  useEffect(() => {

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

  return (

    <>
      <div className="PatioBody">
        <h1> View do Patio</h1>
        <select onChange={(e) => setFiltroTipo(e.target.value)} value={filtroTipo}>
          <option value="Todos">Todos</option>
          <option value="Coleta">Coleta</option>
          <option value="Entrega">Entrega</option>
        </select>

        <div className="PatioCards">
          {transportadorasFiltradas.length > 0 && ( // -> legth > 0 pega o registro mais antigo
            <>
              {/* Card para a entrada mais antiga */}
              <div className="CardPatio_1">
                <h3>Transportadora</h3>
                <a>{transportadorasFiltradas[0].transportadora}</a><br />
                <label htmlFor="">Motorista: </label>
                <a>{transportadorasFiltradas[0].motorista}</a><br />
                <label htmlFor="">Entrada: </label>
                <a>{moment(transportadorasFiltradas[0].dth_entrada).format('DD/MM/YYYY HH:mm')}</a><br />
                <label >Tipo: </label>
                <a>{transportadorasFiltradas[0].tipo}</a>
              </div>

              <div className="CardPatio_2">
                {/* Cards para as entradas subsequentes */}
                {transportadorasFiltradas.slice(1).map((transportadora, index) => ( // o slice(1) vai retornar todos os registro do array a partir da posição 1
                  <div className={`cardPatio ${transportadora.tipo == "Entrega" ? "EntregaPatio" : "ColetaPatio"}`} key={index}>
                    <h4>Transportadora</h4>
                    <a>{transportadora.transportadora}</a><br />
                    <label htmlFor="">Motorista: </label>
                    <a>{transportadora.motorista} </a><br />
                    <label htmlFor="">Entrada: </label>
                    <a>{moment(transportadora.dth_entrada).format('DD/MM/YYYY HH:mm')}</a>
                  </div>
                ))},

              </div>
            </>
          )},
        </div>
      </div>
    </>

  )

}

export default PainelPatio