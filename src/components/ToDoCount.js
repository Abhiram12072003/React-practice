import React from 'react'
import { useContext } from 'react'
import { todosContext } from '../contexts/TodosContextProvider'

function ToDoCount() {
  let [tasks,addNewTasks] = useContext(todosContext);
  return (
    <div>
        <h1>To Do Count:</h1>
        <p>No of tasks there to do is {tasks?.length}</p>
    </div>
  )
}

export default ToDoCount