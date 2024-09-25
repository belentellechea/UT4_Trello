import "../style.css"

export function AddTaskModal({ visible, setVisible}){

    function cerrarModal(){
        setVisible("none"); 
    }

    return (
        <div className="modal" style={{display: visible}}> 
            <div className="modal-content">
            <h2>Nueva tarea</h2>
            <form id="taskForm">
                <div className="columns is-mobile">
                    <div className="column">
                        <div className="box">
                            <label for="title">Título</label>
                            <input type="text" id="titleInput" name="title"/>
                        </div>

                        <div className="box">
                            <label for="assigned">Asignado</label>
                            <select name="asignado" id="assignedInput">
                                <option>Persona 1</option>
                                <option>Persona 2</option>
                                <option>Persona 3</option>
                            </select>
                        </div>

                        <div className="box">
                            <label for="status">Estado</label>
                            <select name="estado" id="statusInput">
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
                            <select name="prioridad" id="priorityInput">
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
    )
}