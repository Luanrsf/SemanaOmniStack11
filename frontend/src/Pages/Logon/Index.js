import React, { useState } from 'react';
import "./style.css";
import heroesImg from "../../assets/heroes.png"
import logoImg from "../../assets/logo.svg";
import { FiLogIn } from "react-icons/fi";
import {Link,useHistory} from "react-router-dom";
import api from "../../services/api"

export default function Logon(){
    const [id, setid] = useState("");
    const history = useHistory();

   async function handleLogin(e){
        e.preventDefault();
        try{
            const response = await api.post('session', {id});
            localStorage.setItem("ongName",response.data.name);
            localStorage.setItem("ongId",id);
            history.push("profile")

        }
        catch(err){
            alert("Falha ao realizar o login")

        }
    }
    return (
        <div className="logon-container">
            <section className="form">
            <img src={logoImg} alt="logo"/>
            <form onSubmit={handleLogin}>
            <h1>Faça seu logon</h1>
            <input placeholder="Sua ID"
            value={id}
            onChange={e=>setid(e.target.value)}
            />
            <button className="button" type="submit">Entrar</button>
                       
            <Link className="back-link" to="/register">
            <FiLogIn />
            Não Tenho Cadastro
            </Link>

            </form>
            </section>
            <img src={heroesImg} alt="heroes"/>
        
        
        </div>
    );    
}
 