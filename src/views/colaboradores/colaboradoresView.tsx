import React, { useState, useEffect, useRef } from "react";
import { format, parseISO } from "date-fns";
import ReactDOM from "react-dom/client";
import App from "../../App.tsx";
import { table } from "console";
import moment from "moment";
import api from "../../service/api.ts"; //-> importação da conexão com a API do backend
import {motion} from 'framer-motion'; //-> biblioteca para animações
import bootbox from 'bootbox';
import '../colaboradores/colaborador.css'


function ListaColaboradores(){

    return(
    <div className="TransportadorasBody">
      <header>
        <h1>Colaboradores</h1>
      </header>
      <div className="TransportadoraConteudo">
      <Lista/>
      </div>
    </div>
    )
}

export default ListaColaboradores;

function Lista() {
    const [colaboradores, setColaboradores] = useState([]); // -> state para visualização
    const [saidas, setSaidas] = useState({}); // Estado para armazenar as saídas
  
    useEffect(() => {
    getColaboradores();

    const intervalId = setInterval(() => {
      getColaboradores(); // Atualiza a cada 10 segundos
    }, 10000);

    return () => clearInterval(intervalId); // Limpa o intervalo ao desmontar
  }, []); // <- IMPORTANTE: [] para rodar apenas uma vez e evitar múltiplos loops

  async function getColaboradores() {
    try {
      const colabApi = await api.get("/registros");
      setColaboradores(colabApi.data);
    } catch (err) {
      console.error("Erro ao buscar colaboradores", err);
    }
  }

 const handleChange = (id, value) => { //-> captura o valor do inpute salva no state 
    setSaidas((prev) => ({ ...prev, [id]: value }));

  };



    /*---- Resgistro de Saída do Colaborador -----*/
    async function registrarSaida(id) {
    const dataSaida = saidas[id];

    if (!dataSaida) {
      alert("Por favor, insira uma data de saída.");
      return;
    }

    try {
      await api.put(`/saida-colaborador/${id}`, {
        saida: dataSaida
      });
      alert("Saída registrada com sucesso!");
    } catch (error) {
      console.error("Erro ao registrar saída:", error);
    }
  }

  return (
    <div>
      {colaboradores.map((colab, index) => (
        <div className="colaboradorCard" key={colab.id}>
          <p>Colaborador: {colab.colaborador?.nome || "Desconhecido"}</p>
          <p>Departamento: {colab.colaborador?.departamento || "Não informado"}</p>
          <p>Entrada: {moment(colab.entrada).format("DD/MM/YYYY HH:mm")}</p>
          <label htmlFor="">Saída: </label>
          <input type="datetime-local" value={saidas[colab.id] || ""} onChange={(e) => handleChange(colab.id, e.target.value)} required/>
          <button type="button" onClick={() => registrarSaida(colab.id)}>Registrar Saída</button>
        </div>
      ))}
    </div>
  );
}
