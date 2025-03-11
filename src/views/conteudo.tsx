import React from "react";
import ReactDOM from "react-dom/client";
import FormTransportadoraEntrada from "../components/cadastroFrom.tsx";
import '../App.css'
import {motion} from 'framer-motion'; //-> biblioteca para animações

const user = {nome: "Lucas"};

const Conteudo =() =>{
        return(
            <div className="bodyConteudo">
                
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                                 <header>
                <h1>Portaria Amino Quimica</h1><br/>
                <img className="icon" src="https://portal.brcondos.com.br/wp-content/uploads/icone_portaria_recepcao2.png"></img>
                </header>
                <FormTransportadoraEntrada/>
                <h2>Seja bem vindo(a)</h2>
                <div className="valores-container">

                    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className="circle">
                        <span>Domínio do conhecimento</span>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className="circle">
                        <span>Orinetação ao Cliente</span>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className="circle">
                        <i className="fas fa-book"></i>
                        <span>Verdade e transparência</span>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className="circle">
                        <i className="fas fa-book"></i>
                        <span>Disciplina e atenção aos detalhes</span>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className="circle">
                        <i className="fas fa-book"></i>
                        <span>Autonomia com colaboração</span>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className="circle">
                        <i className="fas fa-book"></i>
                        <span>Zelo</span>
                    </motion.div>
                </div>

            </motion.div>
            
            </div>
        )
 
}

export default Conteudo;
