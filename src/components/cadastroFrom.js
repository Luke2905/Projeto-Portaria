import React from "react";
import ReactDOM from "react-dom/client";


// Classes de Formulários de controle da portaria (Coleta/Entrega/Visitas)
class FormTransportadoraEntrada extends React.Component{

    render(){
        return(
            <di class="FormEntrada">
                <form method="POST">
                <span class="close">x</span>
                <h2> Entrada de Transportadoras</h2>
                    <label>Transportadora</label>
                    <input id="transportadora" type="text" placeholder="Transportadora.." required="true"></input>
                    <label>Motorista</label>
                    <input id="motorista" type="text" placeholder="Motorista..." required="true"></input>
                    <label>RG</label>
                    <input id="rg" type="text" placeholder="RG" required="true"></input>
                    <label>Ajudante</label>
                    <input id="ajudante" type="text" placeholder="Ajudante..."></input>
                    <label>RG Ajudante</label>
                    <input id="rg-ajudante" type="text" placeholder="RG"></input>
                    <label>Placa</label>
                    <input id="placa" type="text" required="true" placeholder="Placa"></input>
                    <label>Entrada</label>
                    <input id="entrada" type="datetime-local" required="true"></input>
                    <label>Saida</label>
                    <input id="saida" type="datetime-local" disabled></input>
                    <label>Empresa</label>
                    <input id="empresa" type="text" required="true" placeholder="Empresa..."></input><br/>

                    <input id="enviar" type="submit"></input>
                </form>
            </di>
        )
    }
}


export default FormTransportadoraEntrada;