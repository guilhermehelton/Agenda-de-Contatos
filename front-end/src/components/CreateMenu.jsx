import React, { useState } from "react";
import { useApi } from "../services/api";
import './CreateMenu.css'
import closeIcon from '../assets/icons/close_black_24dp.svg'

export default function CreateMenu({ setShowMenu }){
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const api = useApi()

    const handleCreateContato = () => {
        if(nome && email && telefone){
            api.createContato(nome, email, telefone)
            alert('Contato adicionado com sucesso')
        }
    }

    return (
        <div className="background-menu">
            <div className="create-menu">

                <button className="close-button"
                    onClick={() => setShowMenu(false)}>
                        <img src={closeIcon} alt="ícone de fechar" />
                </button>

                <h2>Adicionar Contato</h2>

                <input type="text" placeholder="Nome"
                    onChange={e => setNome(e.target.value)}/>
                <input type="text" placeholder="Email"
                    onChange={e => setEmail(e.target.value)}/>
                <input type="text" placeholder="Tel.: 55859xxxxxxxx"
                    onChange={e => setTelefone(e.target.value)}/>
                <button className="confirm-button"
                    onClick={handleCreateContato}>
                    Confirmar
                </button>
            </div>
        </div>
    )
}