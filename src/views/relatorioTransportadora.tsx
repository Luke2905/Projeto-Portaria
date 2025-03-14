import React, { useState, useEffect, useRef } from "react";
import { format, parseISO } from "date-fns";
import ReactDOM from "react-dom/client";
import App from '../App.tsx'
import { table } from "console";
import moment from "moment";
import api from "../service/api.ts"; //-> importação da conexão com a API do backend
import { motion } from 'framer-motion'; //-> biblioteca para animações
import { tr } from "date-fns/locale";




function RelatorioTransp() {

    return (

        <div className="RelatorioBody">

            <h1>Relatório de Entrada e Saida de Transportadoras</h1>
            <Tabela/>
        </div>


    )

}

export default RelatorioTransp;


function Tabela() {

    const [transportadora, setTransportadora] = useState([]) //-> useState é um hook ( funcionalidade do React) que vai modificar o "estado" de uma variavel exibida na tela
    const [filtroTipo, setFiltroTipo] = useState('Todos'); // -> Estado para o Filtro


    let Transportadora = []

    async function getTransportadoras() { //-> Função para acessar o backend

        const transportadorasApi = await api.get('/reportstransportadora')

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


    useEffect(() => {

        getTransportadoras()
        const intervalo = setInterval(() => {
            alertaTransportadora()
        }, 15000);

    }, [])



    // Const para filtrar os dados antes de renderizar
    const transportadorasFiltradas = transportadora.filter(item => {
        if (filtroTipo === 'Todos') return true;
        return filtroTipo === 'Coleta' ? item.tipo === 'Coleta' : item.tipo === 'Entrega';
    });




    return (
        <>

            <select className="filtroTransp" onChange={(e) => setFiltroTipo(e.target.value)} value={filtroTipo}>
                <option value="Todos">Todos</option>
                <option value="Coleta">Coleta</option>
                <option value="Entrega">Entrega</option>
            </select>

            <div className="TabelaTransportadoras">
            <motion.table
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                >

                    <table className="Tabela">
                        <thead>
                            <th>Nome</th>
                            <th>Motorista</th>
                            <th>Entrada</th>
                            <th>Saida</th>
                            <th>Empresa</th>
                            <th>Tipo</th>
                            <th>Observação</th>
                        </thead>
                        <tbody>
 
                            {transportadorasFiltradas.map(transportadora => (  //-> função map: mapeia os componentes do array e exibe todos na tela


                            <tr key={transportadora.id}>
                                <td>{transportadora.transportadora}</td>
                                <td>{transportadora.motorista}</td>
                                <td>{moment(transportadora.dth_entrada).format('DD/MM/YYYY HH:mm')}</td>
                                <td>{moment(transportadora.dth_saida).format('DD/MM/YYYY HH:mm')}</td>
                                <td>{transportadora.empresa}</td>
                                <td>{transportadora.tipo}</td>
                                <td>{transportadora.observacao}</td>
                            </tr>

                            ))}
       
                        </tbody>
                    </table>
                    </motion.table>
            </div>

        </>
    )
}
