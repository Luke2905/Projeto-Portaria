import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { format, parseISO } from "date-fns";
import ReactDOM from "react-dom/client";
import App from '../App.tsx'
import { table } from "console";
import moment from "moment";
import api from "../service/api.ts";
import { Alert } from "react-bootstrap";
import Conteudo from "./conteudo.tsx";




function Login(){



        const inputEmail = useRef(); // -> useRef: referencia um elemento e pega as informações dele
        const inputSenha = useRef();
        const navigate = useNavigate();
        
    
        async function Login() { //-> Função para criar/enivar transportadora o backend

            try{
              const {data:token} = await api.post('/login', {
                
                    email: inputEmail.current.value,
                    password: inputSenha.current.value

                })

                localStorage.setItem('token', token) // -> Armazena o token de usuario
               // localStorage.setItem('tipo', tipo)

                navigate('/home')


            }catch(err){
                alert('Erro ao efetuar Login')
            }
        
        }
    return(

        <div className="LoginBody">
            <form className="LoginForm" method="post" onSubmit={Login}>
                <label>Usuario:</label><br/>
                <input type="email" placeholder="Usuario..." required ref={inputEmail}/><br/>
                <label>Senha: </label><br/>
                <input type="password" name="" id=""  required ref={inputSenha}/><br/>
                <button type="button" onClick={Login}>Login</button>
            </form>
        </div>



    )
}

export default Login;