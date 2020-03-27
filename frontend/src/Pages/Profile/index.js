import React,{useState,useEffect} from 'react';
import "./style.css";
import logoImg from "../../assets/logo.svg";
import {Link, useHistory} from "react-router-dom";
import {FiPower,FiTrash2 } from "react-icons/fi";
import api from "../../services/api";
export default function Profile(){
    const [incidents,setincidents] =useState([]);
    const history =useHistory();
    const ongName = localStorage.getItem("ongName");
    const ongid = localStorage.getItem("ongId");
    useEffect(()=>{
        api.get("incidents",{
            headers:{
                Authorization:ongid,
            }}).then(response=>{
                setincidents(response.data);

            })
    },[ongid]);
     async function handleIncidentDelete(id){
         try{ 
             await api.delete(`incidents/${id}`,{
             headers: {
                Authorization:ongid,
                }
         });
         setincidents(incidents.filter(incident=>incident.id!==id))
         }catch(err){
             alert("Erro ao deletar o caso")
         }
     }
    function handleLogout(){
        localStorage.clear();
        history.push("/");
    }

    return (
    <div className="profile-container">
        <header>
        <img src={logoImg} alt="logo"/>
        <span>Bem vindo, {ongName}</span>
        <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
        <button type="button" onClick={handleLogout}><FiPower size={18} color="#E02041"/></button>
        </header>
        <h1>Casos Cadastrados</h1>
        <ul>
           {incidents.map(incident => (
                <li key={incident.id}>
                <strong>Caso: </strong>
                <p>{incident.title}</p>
                <strong>Descrição: </strong>
                <p>{incident.description}</p>
                <strong>Valor: </strong>
                <p>{Intl.NumberFormat("pt-BR",{style:"currency", currency:"BRL"
                }).format(incident.value)}</p>
                <button onClick={() => handleIncidentDelete(incident.id)} type="button"><FiTrash2 size={20} color="#a8a8b3"/></button>

            </li> 
           ))}    
        </ul>
        </div>
    )
}