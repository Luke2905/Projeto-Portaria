import React, { useState } from "react";
import '../App.css';
import { motion } from 'framer-motion';
import FormTransportadoraEntrada from "../components/cadastroFrom.tsx";
import FormColaboradorEntrada from "../components/FormEntradaColaborador.tsx"

const Conteudo = () => {
  const [mostrarContatos, setMostrarContatos] = useState(false);

  return (
    <div className="bodyConteudo">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <header>
          <h1>Portaria Amino Quimica</h1><br />
          <img
            className="icon"
            src="https://portal.brcondos.com.br/wp-content/uploads/icone_portaria_recepcao2.png"
            alt="Ícone Portaria"
          />
        </header>

        <button className="ActionButton" onClick={() => setMostrarContatos(true)}>
          Contatos
        </button>

        {mostrarContatos && (
          <Contatos fecharContatos={() => setMostrarContatos(false)} />
        )}
        <FormColaboradorEntrada/>
        <FormTransportadoraEntrada />
        <h2>Seja bem-vindo(a)</h2>

        <div className="valores-container">
          {["Domínio do conhecimento", "Orientação ao Cliente", "Verdade e transparência", "Disciplina e atenção aos detalhes", "Autonomia com colaboração", "Zelo"].map((valor, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className="circle"
            >
              <i className="fas fa-book"></i>
              <span>{valor}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Conteudo;

function Contatos({ fecharContatos }) {
  return (
    <div className="Contatos">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <span className="close" onClick={fecharContatos}>x</span>
        <iframe
          width="100%"
          height="550"
          src="https://app.powerbi.com/view?r=eyJrIjoiNzkwOWZiY2YtZjE4NC00MDA4LWI1YzYtYTcxMjA5MmM5ZjQ3IiwidCI6ImRjOTBlMTZlLTJmYzUtNGM3Yy04YTg1LTlmNzU0ZWJlYzllNiJ9"
          frameBorder="0"
          allowFullScreen
          title="PowerBI"
        ></iframe>
      </motion.div>
    </div>
  );
}
