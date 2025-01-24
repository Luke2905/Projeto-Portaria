import React from "react";
import ReactDOM from "react-dom/client";
import { Nav as Nav, NavDropdown, Container, Navbar } from 'react-bootstrap'

class MenuNav extends React.Component{

    render(){
        return(

            <div class="navContainer">

                <nav>
                    <a href="/html/">HTML</a> |
                    <a href="/css/">CSS</a> |
                    <a href="/js/">JavaScript</a> |
                    <a href="/python/">Python</a>
                </nav>
            
            </div>


        )
    }
 

}

export default MenuNav;
