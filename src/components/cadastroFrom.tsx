import React, { useState } from "react";
import '../App.css';

function FormTransportadoraEntrada({ fecharFormulario }) {
    return (
        <div className="FormEntrada">
            <form method="POST">
                <span className="close" onClick={fecharFormulario}>x</span>
                <h2>Entrada de Transportadoras</h2>

                <label>Transportadora</label>
                <input id="transportadora_input" type="text" placeholder="Transportadora.." required />

                <label>Motorista</label>
                <input id="motorista" type="text" placeholder="Motorista..." required />

                <label>RG</label>
                <input id="rg" type="text" placeholder="RG" required />

                <label>Ajudante</label>
                <input id="ajudante" type="text" placeholder="Ajudante..." />

                <label>RG Ajudante</label>
                <input id="rg-ajudante" type="text" placeholder="RG" />

                <label>Placa</label>
                <input id="placa" type="text" required placeholder="Placa" />

                <label>Entrada</label>
                <input id="entrada" type="datetime-local" required />

                <label>Saída</label>
                <input id="saida" type="datetime-local" disabled />

                <label>Empresa</label>
                <input id="empresa" type="text" required placeholder="Empresa..." /><br />

                <input id="enviar" type="submit" />
            </form>
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