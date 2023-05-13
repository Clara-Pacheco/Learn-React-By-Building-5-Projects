import { useState, useRef } from "react"

import "./App.css"

export function App() {

  const [todoList, settodoList] = useState([])
  const [currentTask, setCurrentTask] = useState("")

  const inputTask = useRef(null)

  return(
    <div className="app"> 

      <h1>ToDo List </h1>

      <div className="task">
        <input
          ref={inputTask}
          type="text"
          placeholder="Enter Task"
          onChange={(event) => {
            setCurrentTask(event.target.value)
          }}
        />
        <button
          onClick={() => {
            settodoList([...todoList, currentTask])
            inputTask.current.value = ""
          }}
        >
          Add Task
        </button>
      </div>
      <hr />
      <ul className="list">
        {
          todoList.map((task)=>{
            return(
              <li key={task}>{task}</li>
            )
          })
        }
      </ul>
    
    </div>
  )
  
}


