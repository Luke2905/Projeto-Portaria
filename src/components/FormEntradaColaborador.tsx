import React, { useState, useRef, use, useEffect } from "react";
import { IMaskInput } from "react-imask"; //-> biblioteca de mascara de input
import axios from "axios";
import api from "../service/api.ts";
import '../App.css';
import Conteudo from "../views/conteudo.tsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {motion} from 'framer-motion'; //-> biblioteca para animações


function FormColaboradorEntrada({ fecharFormulario }) {

    const [colaboradores, setColaboradores] = useState([]);

    const inputColaborador = useRef();
    const inputDtEnt = useRef();
    const inputDtSai = useRef();
    
    useEffect(() => {

       getColaboradores();
   
     }, []);
   

    async function getColaboradores() {

        const listaColaboradores = await api.get('/lista-colaborador')

        setColaboradores(listaColaboradores.data);
    }

    async function registarEntrada(e) { //-> Função para criar/enivar transportadora o backend
     e.preventDefault(); //← Impede o envio padrão do form

        const  colaborador = inputColaborador.current.value;
        const entrada = inputDtEnt.current.value;

        if(!entrada || !colaborador){
            toast.warn("Por Favor Informe uma data e horário!");
            return;
        }

        try{

             const NovaEntrada = await api.post('/entrada-colaborador', {
            
                colaboradorId: inputColaborador.current.value,
                entrada: inputDtEnt.current.value,
                saida: inputDtSai.current.value

            })
      
            if (!NovaEntrada) {
                console.log("Nenhuma nova entrada cadastrada.");
            } else {
                toast.success(`Entrada registrada para ${NovaEntrada.data.nome || 'colaborador'}`);
                setTimeout(() => window.location.reload(), 1000);
            }
        }catch(err){
            toast.error("Erro ao registrar Entrada.")
        }

    
    }

    return (
        <div className="FormEntrada">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <form action={Conteudo}>
                <span className="close" onClick={fecharFormulario}>x</span>
                
                <h2>Entrada de Colaboradores</h2>

                <label>Colaborador</label>
                <select id="select" ref={inputColaborador} required >
                    <option>Selecione um colaborador...</option>
                    {colaboradores.map (colab =>(
                     <option key={colab.id} value={colab.id}>{colab.nome}</option>
                    ))}
                </select>
                
                <label>Entrada</label>
                <input id="entrada" type="datetime-local" ref={inputDtEnt} required />

                <label>Saída</label>
                <input id="saida" type="datetime-local" disabled ref={inputDtSai}/><br></br>

                <input id="enviar" type="submit"  onClick={registarEntrada} />
            </form>
            </motion.div>
            <ToastContainer/>
        </div>
    );
}

function Abriform() {
    const [mostrarFormulario, setMostrarFormulario] = useState(false);

    return (

        <div>
            <button className="ActionButton" id="cadTransportadora" onClick={() => setMostrarFormulario(true)}>
                Entrada de Colaborador
            </button>

            {mostrarFormulario && <FormColaboradorEntrada fecharFormulario={() => setMostrarFormulario(false)} />}
        </div>
    );
}

export default Abriform;