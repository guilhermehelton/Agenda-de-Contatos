import React from "react";
import './TableData.css'

export default function TableData({ id, nome, email, telefone, handleDelete }){
    return (
        <React.Fragment>
            <td>{nome}</td>
            <td>{email}</td>
            <td>{telefone}</td>
            <td>
                <button className='erase-button'
                    onClick={() => handleDelete(id)}>Apagar</button>
                <button  className='edit-button'>
                    <a href={`https://wa.me/${telefone}`} target="_blank">
                        Conversar
                    </a>
                </button>
            </td>
        </React.Fragment>
    )
}