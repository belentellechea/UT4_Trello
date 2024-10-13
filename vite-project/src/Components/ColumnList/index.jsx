import { Column } from "../Column"
import "./style.css"

export function ColumnList ({ columns, tasks, deleteTask, updateTask }) {
    return (
        <div className="columns is-mobile custom-column">
            {columns.map((column) => {
                const filteredTasks = Array.isArray(tasks) ? tasks.filter(task => task.status === column) : [];

                return (
                    <Column key={column} title={column} tasks={filteredTasks} deleteTask={deleteTask} updateTask={updateTask}/>
                );
            })}
        </div>
    )
} 
