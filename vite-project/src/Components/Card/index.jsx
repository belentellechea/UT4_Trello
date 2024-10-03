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
                <p>Descripción: {props.description}</p>
                <p>Asignado: {props.assigned}</p>
                <p>Prioridad: {props.priority}</p>
                <p>Fecha límite: {props.finalDate}</p>
            </div>
            <EditTaskModal 
                visible={visible} setVisible={setVisible} 
                title={props.title}
                description={props.description}
                assigned={props.assigned}
                priority={props.priority}
                finalDate={props.finalDate}
                status={props.status}
            />
        </div>
    )
}