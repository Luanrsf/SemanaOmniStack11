import React,{useState} from 'react';
import "./style.css";
import logoImg from "../../assets/logo.svg";
import {Link,useHistory} from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import api from "../../services/api";
export default function (){
        const [title,settitle]=useState("");
        const [description,setdescription]=useState("");
        const [value,setvalue]=useState("");
        const history = useHistory();
        const ongid = localStorage.getItem("ongId")
    
    async function handleNewIncidente(e){
        e.preventDefault();
        const data={
            title,
            description,
            value,
        }
        try{ 
        await api.post('incidents', data,{
               headers:{ Authorization:ongid}
            });
           alert(`caso cadastrado com sucesso`);
            history.push("/profile");
        }
           catch(err){
               alert("Erro ao fazer o cadastro do seu caso")
           }
        
    }

    return (
        <div className="newIncident-container">
        <div className="content">
        <section>
        <img src={logoImg} alt="logo"/>
        <h1>Cadastrar Novo Caso</h1>
        <p>Descreva o caso detalhadamente para um heroi vir resolver isso</p>
        <Link className="back-link" to="/profile">
            <FiArrowLeft />
            Voltar para o Home
            </Link>
            </section>
            <form onSubmit={handleNewIncidente}>
            <input placeholder="Titulo do Caso"
            value={title}
            onChange={e => settitle(e.target.value)}
            />
            <textarea placeholder="Descrição"
            value={description}
            onChange={e => setdescription(e.target.value)}
            />
            <input placeholder="Valor em reais"
            value={value}
            onChange={e => setvalue(e.target.value)}
            />
            <button className="button" type="submit">Cadastrar</button>
            </form>


        </div>
        </div>
    )}