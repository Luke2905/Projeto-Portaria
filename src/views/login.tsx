import React, { useState, useEffect } from "react";
import { format, parseISO } from "date-fns";
import ReactDOM from "react-dom/client";
import App from '../App.tsx'
import { table } from "console";
import moment from "moment";
import api from "../service/api.ts"




function Login(){
    return(

        <div className="Login">
            <form action="" method="post">
                <label>Usuario:</label>
                <input type="text" placeholder="Usuario..." required />
                <label>Senha</label>
                <input type="password" name="" id=""  required/>
                <button type="button">Login</button>
            </form>
        </div>



    )
}

export default Login(); 