import React from "react";
import ReactDOM from "react-dom/client";
import Spinner from 'react-bootstrap/Spinner';
import Toast from 'react-bootstrap/Toast';


const PainelPatio = () =>{

    return(

        <div className="PatioBody">

            <header>
                <h1>
                    View Patio
                </h1>
            </header>  
            <div className="loader"></div>

        </div>
    )

    setTimeout(() => {
        window.location.reload(); //-> Recarrega a pagina
    }, 10000); //-> Tempo: 10 segundos
}

export default PainelPatio;