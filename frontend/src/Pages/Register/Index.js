import React,{useState} from 'react';
import logoImg from "../../assets/logo.svg";
import {Link, useHistory} from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import "./style.css";
import api from "../../services/api";

export default function Register(){
        const [name, setName] = useState("");
        const [email, setemail] = useState("");
        const [whatsapp, setwhatsapp] = useState("");
        const [city, setcity] = useState("");
        const [uf, setuf] = useState("");
        const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();
        const data={
            name,
            email,
            whatsapp,
            city,
            uf};
       try{ 
        const response = await api.post('ongs', data);
        alert(`Seu id de acesso é ${response.data.id}`);
        history.push("/");
    }
       catch(err){
           alert("Erro ao fazer o cadastro")
       }
        }
    return(
        <div className="register-container">
        <div className="content">
        <section>
        <img src={logoImg} alt="logo"/>
        <h1>Cadastro</h1>
        <p>Faça seu cadastro, entra na plataforma e ajuda pessoas a encontrarem os casos de suas ongs</p>
        <Link className="back-link" to="/">
            <FiArrowLeft />
            Voltar para o Logon
            </Link>
        </section>
        <form onSubmit={handleRegister}> 
        <input placeholder="Nome da sua ong"
        value={name}
        onChange={e => setName(e.target.value)}
        />
        <input placeholder="Email"
        value={email}
        onChange={e => setemail(e.target.value)}/>
        <input placeholder="Whatsapp"
        value={whatsapp}
        onChange={e => setwhatsapp(e.target.value)}
        />
        <div className="input-group">
        <input placeholder="Cidade"
        value={city}
        onChange={e => setcity(e.target.value)}
        />
        <input placeholder="UF" style={{width:"80px"}}
        value={uf}
        onChange={e => setuf(e.target.value)}
        />
        </div>
        <button className="button" type="submit">Cadastrar</button>

        </form>
        </div>
        </div>
    )
}
