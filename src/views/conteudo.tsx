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
                <h2>Seja bem vindo(a),</h2>
                <a>{user.nome}</a>
                <div className="valores-container">
                    <div className="circle">
                    <i className="fas fa-book"></i>
                    <span>Domínio do conhecimento</span>
                    </div>
                </div>

            </motion.div>
            </div>
        )
 
}

export default Conteudo;
