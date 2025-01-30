import React from "react";
import ReactDOM from "react-dom/client";
import FormTransportadoraEntrada from "../components/cadastroFrom.tsx";
// import App from "./App";

const user = {nome: "Lucas"};
class Conteudo extends React.Component{

    render(){
        return(

            <div class="bodyConteudo">
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
