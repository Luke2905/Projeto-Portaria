import { createContext, useState, useEffect } from "react";
import api from "./api.ts";


//Criar o contexteto de autenticação
export const AuthContext = createContext();

//Provedor do contexto de autenticação
export function AuthProvider({ children }) {

    const [user, setUser] = useState(null) // -> estado do usuario
    const [token, setToken] = useState(null)


    // Carrega o Usuario e Token do LocalStorage
    useEffect(() => {
        const storedUser = localStorage.getItem("user")
        const storedToken = localStorage.getItem("toke")


        if (storedUser && setToken) {
            setUser(JSON.parse(storedUser))
            setToken(storedToken)

            api.defaults.headers.Authorization = `Bearer ${storedToken}`
        }
    }, [])


    //Função de Login
    async function login(email, password) {

        try{
            const {data} = await api.post('/login', {email, password}); //-> dados para login

            const { token, user } = data;

            setUser(user);
            setToken(token);

            // Salvando no LocalStorage para persistência
            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("token", token);

            // Configurando token globalmente para futuras requisições
            api.defaults.headers.Authorization = `Bearer ${token}`;

        }catch(error){

            console.error("Erro ao efetuar login", error);
            throw new Error("Credenciais inválidas");

        }
        
    }

        // Função para logout
        function logout() {
            setUser(null);
            setToken(null);
            localStorage.removeItem("user");
            localStorage.removeItem("token");
            delete api.defaults.headers.Authorization;
        }
    
        return (
            <AuthContext.Provider value={{ user, token, login, logout }}>
                {children}
            </AuthContext.Provider>
        );
}