import "../style.css";
import { useState } from "react";
import axios from "axios";

const url= `http://localhost:3000/cards`;

export function EditTaskModal({ visible, setVisible, card }) {
    const [formData, setFormData] = useState(card);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    function cerrarModal() {
        setVisible("none");
    }

    async function eliminarTarea() {
        const taskId = card.id; 
        console.log(`Eliminando tarea con id: ${taskId}`);
        try {
            await axios.delete(`${url}/${taskId}`, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });            
            setVisible("none"); 
        } catch (error) {
            console.error("Error eliminando la tarea:", error);
        }
    };

    return (
        <div className="modal" style={{ display: visible }}>
            <div className="modal-content">
                <h2>Editar tarea</h2>
                <form id="editTaskForm">
                    <div className="columns is-mobile">
                        <div className="column">
                            <div className="box">
                                <label htmlFor="title">Título</label>
                                <input
                                    type="text"
                                    id="titleInput"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="box">
                                <label htmlFor="assigned">Asignado</label>
                                <select
                                    name="assigned"
                                    id="assignedInput"
                                    value={formData.assigned}
                                    onChange={handleInputChange}
                                >
                                    <option value="Persona 1">Persona 1</option>
                                    <option value="Persona 2">Persona 2</option>
                                    <option value="Persona 3">Persona 3</option>
                                </select>
                            </div>
                            <div className="box">
                                <label htmlFor="status">Estado</label>
                                <select
                                    name="status"
                                    id="statusInput"
                                    value={formData.status}
                                    onChange={handleInputChange}
                                >
                                    <option value="Backlog">Backlog</option>
                                    <option value="To do">To do</option>
                                    <option value="In progress">In progress</option>
                                    <option value="Blocked">Blocked</option>
                                    <option value="Done">Done</option>
                                </select>
                            </div>
                        </div>
                        <div className="column">
                            <div className="box">
                                <label htmlFor="description">Descripción</label>
                                <input
                                    type="text"
                                    id="descriptionInput"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="box">
                                <label htmlFor="priority">Prioridad</label>
                                <select
                                    name="priority"
                                    id="priorityInput"
                                    value={formData.priority}
                                    onChange={handleInputChange}
                                >
                                    <option value="Alta">Alta</option>
                                    <option value="Media">Media</option>
                                    <option value="Baja">Baja</option>
                                </select>
                            </div>
                            <div className="box">
                                <label htmlFor="finalDate">Fecha límite</label>
                                <input
                                    type="date"
                                    id="due-date"
                                    name="finalDate"
                                    value={formData.finalDate}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="modal-buttons">
                        <button type="button" id="cancel-button" onClick={cerrarModal}>
                            Cancelar
                        </button>
                        <button type="submit" id="save-button">
                            Guardar cambios
                        </button>
                        <button type="button" id="clear-button" onClick={eliminarTarea}>
                            Eliminar tarea
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
