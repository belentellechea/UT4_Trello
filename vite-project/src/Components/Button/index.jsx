import React, { useState } from "react";
import "./style.css"
import { AddTaskModal } from "../Modal/AddTaskModal";

export function Button(){
    const [visible, setVisible] = useState("none")

    function openModal(){
        setVisible("block"); 
    }

    return (
        <div>
            <button className="add-task-button" onClick={openModal}> + Agregar tarea </button>
            <AddTaskModal visible={visible} setVisible={setVisible} />
        </div>
        
    )
}