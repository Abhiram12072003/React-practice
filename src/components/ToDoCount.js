import React from 'react'

function ToDoCount(props) {
  return (
    <div>
        <h1>To Do Count:</h1>
        <p>No of tasks there to do is {props.cnt}</p>
    </div>
  )
}

export default ToDoCount