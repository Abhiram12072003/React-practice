import React from 'react'
import { todosContext } from '../contexts/TodosContextProvider';
import { useContext } from 'react';

function ToDoList() {
    let [tasks,addNewTasks] = useContext(todosContext);
    return (
        <div>
            <h1>To Do List</h1>
            {tasks?.length!==0 && 
            <table className='text-center'>
                <thead>
                    <tr>
                        <th>Sno</th>
                        <th>Tasks</th>
                    </tr>
                </thead>
                <tbody>
                {
                    tasks.map((elem,idx)=><tr key={idx}>
                        <td>{idx+1}</td>
                        <td>{elem}</td>
                    </tr>)
                }
                </tbody>    
            </table>
            }
        </div>
  )
}

export default ToDoList