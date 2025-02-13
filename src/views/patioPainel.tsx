import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import Spinner from 'react-bootstrap/Spinner';
import Toast from 'react-bootstrap/Toast';


const PainelPatio = () =>{

    useEffect(() =>{
        const RecarregaPagina = setTimeout(() => {
            window.location.reload(); //-> Recarrega a pagina
        }, 60000); //-> Tempo: 60 segundos

                // Limpa o timeout caso o componente seja desmontado
                return () => clearTimeout(RecarregaPagina);
        }, []);
    

    return(

        <div className="PatioBody">

            <header>
                <h1>
                    View Patio
                </h1>
            </header>  
            <div className="PatioCards">
                <div className="Card_1"></div>
                <div className="Card_2"></div>
                <div className="Card_3"></div>
                <div className="Card_4"></div>
            </div>
            {/* <div className="loader"></div> */}

        </div>
    )


}

export default PainelPatio;
