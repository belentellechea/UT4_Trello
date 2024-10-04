import "../style.css"
import axios from "axios";

const url= `http://localhost:3000/cards`;

export function AddTaskModal({visible, setVisible}){

    const handleSubmit = async(e) => {
        e.preventDefault(); 

        const newTask = {
            title: e.target.title.value,
            description: e.target.description.value, 
            assigned: e.target.assigned.value, 
            priority: e.target.priority.value, 
            status: e.target.status.value, 
            finalDate: e.target['due-date'].value, 
        }

        try {
            await axios.post(url, newTask); 
            setVisible("none"); 
        } catch (error) {
            console.error("Error añadiendo la tarea:", error); 
        }
    }

    function cerrarModal(){
        setVisible("none"); 
    }

    return (
        <div className="modal" style={{display: visible}}> 
            <div className="modal-content">
            <h2>Nueva tarea</h2>
            <form id="taskForm" onSubmit={handleSubmit}>
                <div className="columns is-mobile">
                    <div className="column">
                        <div className="box">
                            <label for="title">Título</label>
                            <input type="text" id="titleInput" name="title"/>
                        </div>

                        <div className="box">
                            <label for="assigned">Asignado</label>
                            <select name="assigned" id="assignedInput">
                                <option>Persona 1</option>
                                <option>Persona 2</option>
                                <option>Persona 3</option>
                            </select>
                        </div>

                        <div className="box">
                            <label for="status">Estado</label>
                            <select name="status" id="statusInput">
                                <option>Backlog</option>
                                <option>To do</option>
                                <option>In progress</option>
                                <option>Blocked</option>
                                <option>Done</option>
                            </select>
                        </div>

                    </div>
                    <div className="column">
                        <div className="box">
                            <label for="description">Descripción</label>
                            <input type="text" id="descriptionInput" name="description"/>
                        </div>


                        <div className="box">
                            <label for="priority">Prioridad</label>
                            <select name="priority" id="priorityInput">
                                <option>Alta</option>
                                <option>Media</option>
                                <option>Baja</option>
                            </select>
                        </div>

                        <div className="box">
                            <label for="due-date">Fecha límite</label>
                            <input type="date" id="due-date" name="due-date"/><br/>
                        </div>
                    </div>
                </div>
                <div className="modal-buttons">
                    <button type="button" id="cancel-button" onClick={cerrarModal}>Cancelar</button>
                    <button type="submit" id="accept-button">Aceptar</button>
                </div>
            </form>
            </div>
        </div>
    );
}