import React from "react";
import "./style.css"

export function Card(props){
    return (
        <div className="card" id={props.id}>
            <div className="card-header">
                <div className="card-header-title">{props.title}</div>
            </div>
            <div className="card-content">
                <p>Descripción: {props.description}</p>
                <p>Asignado: {props.assigned}</p>
                <p>Prioridad: {props.priority}</p>
                <p>Fecha límite: {props.finalDate}</p>
            </div>
        </div>
    )
}