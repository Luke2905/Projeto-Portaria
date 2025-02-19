import React, { useState, useRef } from "react";
import { IMaskInput } from "react-imask"; //-> biblioteca de mascara de input
import axios from "axios";
import api from "../service/api.ts";
import '../App.css';
import Conteudo from "../views/conteudo.tsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {motion} from 'framer-motion'; //-> biblioteca para animações


/* eslint-disable */
function FormTransportadoraEntrada({ fecharFormulario }) {



    const inputNome = useRef(); // -> useRef: referencia um elemento e pega as informações dele
    const inputMotorista = useRef();
    const inputRG = useRef();
    const inputAjudante = useRef();
    const inputRgAjudante = useRef();
    const inputPlaca = useRef();
    const inputDtEnt = useRef();
    const inputDtSai = useRef();
    const inputEmpresa = useRef();
    const inputTipo = useRef();
    

    async function createTransportadoras() { //-> Função para criar/enivar transportadora o backend
        await api.post('/cad-transportadoras', {
            
                transportadora: inputNome.current.value,
                motorista: inputMotorista.current.value,
                rg_motorista: inputRG.current.value,
                ajudante: inputAjudante.current.value,
                rg_ajudante: inputRgAjudante.current.value,
                placa: inputPlaca.current.value,
                dth_entrada: inputDtEnt.current.value,
                dth_saida: inputDtSai.current.value,
                empresa: inputEmpresa.current.value,
                tipo: inputTipo.current.value
            })
    
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
                <h2>Entrada de Transportadoras</h2>

                <label>Transportadora</label>
                <input id="transportadora_input" type="text" placeholder="Transportadora.." required  ref={inputNome} /*-> Ref server para referenciar o elemento a ter os dados coletados*//>

                <label>Motorista</label>
                <input id="motorista" type="text" placeholder="Motorista..." required ref={inputMotorista}/><br />

                <label>RG</label>
                <IMaskInput mask={"00.000.000-00"} id="rg" type="text" placeholder="RG" required inputRef={inputRG} />
                <label>Ajudante</label>
                <input id="ajudante" type="text" placeholder="Ajudante..."  ref={inputAjudante}/>

                <label>RG Ajudante</label>
                <IMaskInput mask={"00.000.000-00"} id="rg-ajudante" type="text" placeholder="RG" inputRef={inputRgAjudante}/><br />

                <label>Placa</label>
                <input id="placa" type="text" required placeholder="Placa" ref={inputPlaca}/>

                <label>Entrada</label>
                <input id="entrada" type="datetime-local" required ref={inputDtEnt}/>

                <label>Saída</label>
                <input id="saida" type="datetime-local" disabled ref={inputDtSai}/>

                <label>Empresa</label>
                <input id="empresa" type="text" required placeholder="Empresa..."  ref={inputEmpresa}/><br />

                <label>Tipo</label>
                <select id="select" ref={inputTipo}>
                    <option value={""}>Selecionar...</option>
                    <option value={"Entrega"}>Entrega</option>
                    <option value={"Coleta"}>Coleta</option>
                </select>

                <input id="enviar" type="submit"  onClick={createTransportadoras}  />
            </form>
            </motion.div>
        </div>
    );
}

function Abriform() {
    const [mostrarFormulario, setMostrarFormulario] = useState(false);

    return (
        <div>
            <button className="ActionButton" id="cadTransportadora" onClick={() => setMostrarFormulario(true)}>
                Entrada de Transportadora
            </button>

            {mostrarFormulario && <FormTransportadoraEntrada fecharFormulario={() => setMostrarFormulario(false)} />}
        </div>
    );
}

export default Abriform;