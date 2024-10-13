import "./style.css"
import { Card } from "../Card";

export function Column(props) {

    return (
        <div className="column is-one-fifth">
            <div className="box">
                <h1 className="title is-4">{props.title}</h1>
                {props.tasks.map((task) => (
                        <Card
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        description={task.description}
                        assigned={task.assigned}
                        priority={task.priority}
                        finalDate={task.finalDate}
                        status={task.status}
                        deleteTask={props.deleteTask}
                        updateTask={props.updateTask}
                        />
                    ))}
            </div>
        </div>
    )
}