import React from "react";
import ReactDOM from "react-dom/client";
import FormTransportadoraEntrada from "../components/cadastroFrom.tsx";
import '../App.css'

const user = {nome: "Lucas"};
class Conteudo extends React.Component{

    render(){
        return(
            <div class="bodyConteudo">
                 <header>
                <h1>Portaria Amino Quimica</h1><br/>
                <img class="icon" src="https://portal.brcondos.com.br/wp-content/uploads/icone_portaria_recepcao2.png"></img>
                </header>
                <h2>Seja bem vindo(a),</h2>
                <a>{user.nome}</a>

                <div className="valores-container">
                    <div class="circle">
                    <i class="fas fa-book"></i>
                    <span>Domínio do conhecimento</span>
                    </div>
                </div>
            </div>
        )
    }
 

}

export default Conteudo;
