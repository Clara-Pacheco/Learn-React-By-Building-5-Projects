import { useState, useRef } from "react"

import "./App.css"

export function App() {

  const [todoList, settodoList] = useState([])
  const [currentTask, setCurrentTask] = useState("")

  const inputTask = useRef(null)

  const addTask = () => {
    settodoList([...todoList, {task:currentTask, completed: false}])
    inputTask.current.value = ""
    setCurrentTask("")
  }

  const deleteItem = (taskToDelete) => {
    settodoList(todoList.filter((task) => {
        return task.task !== taskToDelete
    }))
  }

  const completeTask = (taskToComplete) => {
    settodoList(todoList.map((task)=>{
      return task.task === taskToComplete ? {task: taskToComplete, completed: true} : {task: task.task, completed: task.completed ? true : false} 
    }))
  }

  return(
    <div className="app"> 

      <h1>ToDo List </h1>

      <div className="task">
        <input
          ref={inputTask}
          type="text"
          placeholder="Enter Task"
          onKeyDown={(event) =>{if(event.keyCode ==13){
            addTask()
          }}}
          onChange={(event) => {
            setCurrentTask(event.target.value)
          }}
        />
        <button
          className="addbtn"
          onClick={() => {
            if(inputTask.current.value == "") {
              return
            }
            addTask()
          }}
        >
          Add Task
        </button>
      </div>
      <hr />
      <ul className="list">
        {
          todoList.map((task, key)=>{
            return(
              <div
                 key={key}
                 className="tasksDisplayed"
              >
                <li>{task.task}</li>
                <button onClick={() =>{completeTask(task.task)}}>{task.completed ? 'Completed' : 'Complete'}</button>
                <button className="btn" onClick={() => {deleteItem(task.task)}}>X</button>
                {
                  task.completed ? <h1>Task completed</h1> : <h1>Task not completed</h1>
                }
              </div>
              
            )
          })
        }
      </ul>
    
    </div>
  )
  
}


