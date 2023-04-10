import React from 'react'

function ToDoList(props) {
    let x=props.tasks;
    return (
        <div>
            <h1>To Do List</h1>
            {x?.length!==0 && 
            <table className='text-center'>
                <thead>
                    <tr>
                        <th>Sno</th>
                        <th>Tasks</th>
                    </tr>
                </thead>
                <tbody>
                {
                    x.map((elem,idx)=><tr key={idx}>
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