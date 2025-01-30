import React from "react";
import ReactDOM from "react-dom/client";
import { Nav as Nav, NavDropdown, Container, Navbar } from 'react-bootstrap';
import amino_branco from "../images/amino_branco.png";
import App from '../App.tsx'
import { Outlet, Link } from "react-router-dom";

const MenuNav = () => {

        return(
            <>
                <div class="navContainer">
                <img width="60px" height="auto" className="img-responsive" src={amino_branco}  alt="amino_branco" />
                <nav>
                    <Link /*-> Gera o link/mascara da rota no navegador*/to="/">Home</Link> 
                    <Link to="/transportadoras">Transportadoras</Link>
                    <a href="/js/">Pátio</a> |
                    <a href="/python/">Visitantes</a>
                </nav>
            
            </div>

            <Outlet/>
            </>
        )

 

}

export default MenuNav;
