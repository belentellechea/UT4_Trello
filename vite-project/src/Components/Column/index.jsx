import {useState, useEffect} from "react";
import "./style.css"
import { Card } from "../Card";
import axios from "axios";

const url= `http://localhost:3000/cards`;

export function Column(props) {
    const [tasks, setTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      async function fetchTasks() {
        try {
          const response = await axios.get(url);
          const taskData = response.data;
  
          const filteredTasks = taskData.filter((task) => task.status === props.title);
  
          setTasks(filteredTasks); 
          setIsLoading(false); 

        } catch (error) {
          console.error("Error al obtener las tareas:", error);
        }
      };
  
      fetchTasks(); 
    }, [props.title]); 
  

    return (
        <div className="column">
            <div className="box">
                <h1 className="title is-4">{props.title}</h1>
                {!isLoading && tasks.length > 0 && (
                    tasks.map((task) => (
                        <Card
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        description={task.description}
                        assigned={task.assigned}
                        priority={task.priority}
                        finalDate={task.finalDate}
                        status={task.status}
                        />
                    ))
                    )}
            </div>
        </div>
    )
}