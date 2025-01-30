import React from "react";
import ReactDOM from "react-dom/client";
import { Nav as Nav, NavDropdown, Container, Navbar } from 'react-bootstrap';
import amino_branco from "../images/amino_branco.png";
import App from '../App.tsx'

const MenuNav = () => {

        return(

            <>
                <div class="navContainer">
                <img width="60px" height="auto" className="img-responsive" src={amino_branco}  alt="amino_branco" />
                <nav>
                    <a href="/html/">Home</a> |
                    <a href="/css/">Transportadoras</a> |
                    <a href="/js/">Pátio</a> |
                    <a href="/python/">Visitantes</a>
                </nav>
            
            </div>
            </>
        )

 

}

export default MenuNav;
