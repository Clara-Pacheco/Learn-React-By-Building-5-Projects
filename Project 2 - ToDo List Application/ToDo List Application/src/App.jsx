import { useState } from "react"

import "./App.css"

export function App() {

  const [todoList, settodoList] = useState([])
  const [currentTask, setCurrentTask] = useState("")


  return(
    <div className="app"> 

      <h1>ToDo List </h1>

      <div className="task">
        <input
          type="text"
          placeholder="Enter Task"
          onChange={(event) => {
            setCurrentTask(event.target.value)
          }}
        />
        <button
          onClick={() => {
            settodoList([...todoList, currentTask])
          }}
        >
          Add Task
        </button>
      </div>
      <hr />
      <div className="list">
        {
          todoList.map((task)=>{
            return(
              <li key={task}>{task}</li>
            )
          })
        }
      </div>
    
    </div>
  )
  
}


