// import "./App.css"
import { NavBar } from "./Components/NavBar";
import { Button } from "./Components/Button";
import { ColumnList } from "./Components/ColumnList";
import { useEffect, useState } from "react"
import axios from "axios";

const url= `http://localhost:3000/cards`;

export default function App() {
  const [tasks, setTasks] = useState([]); 
  const columns = ["Backlog", "To do", "In progress", "Blocked", "Done"];

  async function fetchTasks() {
    try {
      const response = await axios.get(url);
      setTasks(response.data); 
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  async function postTask(task) {
    try {
      const response = await axios.post(url, task); 
      const newTask = response.data; 
      setTasks(prevTasks => [...prevTasks, newTask]);
    } catch (error) {
      console.log("Error posting task: ", error); 
    }
  }

  async function deleteTask(id) {
    try {
      await axios.delete(`${url}/${id}`, {
        headers: {
            'Content-Type': 'application/json',
        }
      });
    } catch (error) {
      console.log("Error deleting task: ", error)
    }
  }

  function deleteHandler(id) {
    deleteTask(id); 
    setTasks([...tasks.filter(task => task.id !== id)]); 
  }

  async function updateTask(id, formData) {
    try {
      const response = await axios.patch(`${url}/${id}`, formData, {
        headers: {
            'Content-Type': 'application/json',
        },
      });
      setTasks(prevTasks => 
        prevTasks.map(task => task.id === id ? response.data : task)
      );
    } catch (error) {
      console.log("Error updating task: ", error); 
    }
  }

  return (
    <div className='App'>
      <NavBar></NavBar>
      <div className="flex-box"> 
        <h1 className="title">Gestor de tareas</h1>
        <Button postTask={postTask}></Button>
      </div>
      <ColumnList columns={columns} tasks={tasks} deleteTask={deleteHandler} updateTask={updateTask}/>
    </div>
  )
}


