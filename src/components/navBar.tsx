import React from "react";
import ReactDOM from "react-dom/client";
import { Nav as Nav, NavDropdown, Container, Navbar } from 'react-bootstrap';

class MenuNav extends React.Component{

    render(){
        return(

            <div class="navContainer">

                <nav>
                    <a href="/html/">Home</a> |
                    <a href="/css/">Transportadoras</a> |
                    <a href="/js/">Pátio</a> |
                    <a href="/python/">Visitantes</a>
                </nav>
            
            </div>


        )
    }
 

}

export default MenuNav;
