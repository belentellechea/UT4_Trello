import { useState } from "react"; 
import "./style.css"
import { EditTaskModal } from "../Modal/EditTaskModal";

export function Card(props){
    const [visible, setVisible] = useState("none")

    function openModal(){
        setVisible("block"); 
    }

    return (
        <div onClick={openModal}  className="card" id={props.id}>
            <div className="card-header">
                <div className="card-header-title">{props.title}</div>
            </div>
            <div className="card-content">
                <p><strong>Descripción:</strong> {props.description}</p>
                <p><strong>Asignado:</strong> {props.assigned}</p>
                <p><strong>Prioridad:</strong> {props.priority}</p>
                <p><strong>Fecha límite:</strong> {props.finalDate}</p>
            </div>
            <EditTaskModal 
                visible={visible} setVisible={setVisible} 
                card={props} 
            />
        </div>
    )
}