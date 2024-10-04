// import "./App.css"
import { NavBar } from "./Components/NavBar"
import { Card } from "./Components/Card"
import { Button } from "./Components/Button"
import { Column } from "./Components/Column"

export default function App() {

  return (
    <div className='App'>
      <NavBar></NavBar>
      <div className="flex-box"> 
        <h1 className="title">Gestor de tareas</h1>
        <Button></Button>
      </div>
      <div className="columns is-mobile custom-column">
        <Column title="Backlog"/>
        <Column title="To do"/>
        <Column title="In progress"/>
        <Column title="Blocked"/>
        <Column title="Done"/>
      </div>
    </div>
  )
}


