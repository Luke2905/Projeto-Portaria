import React from "react";
import ReactDOM from "react-dom/client";
import FormTransportadoraEntrada from "../components/cadastroFrom";
// import App from "./App";


class Conteudo extends React.Component{

    render(){
        return(
            
            <div class="bodyConteudo">
                <div class="Homecard1">
                </div>
                <div class="Homecard2">
                    <p>DIV 2</p>
                </div>
                <FormTransportadoraEntrada/>
            </div>
        )
    }
 

}

export default Conteudo;
