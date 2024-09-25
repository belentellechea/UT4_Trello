import React from "react";
import "./style.css"

export function Column(props) {
    //hacer un map de todas las tareas a dibujar 
    //recibe array llamado tareas 
    return (
        <div className="column">
            <div className="box">
                <h1 className="title is-4">{props.title}</h1>
            </div>
        </div>
    )
}