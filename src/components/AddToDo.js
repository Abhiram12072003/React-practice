import React from 'react'

function AddToDo(props) {
    // let [data,setData] = useState([]);
    let x='';
    let handle=(event)=>{x=event.target.value;}
    let addTask=(x)=>{
        // setData([...data,x])
        console.log('Data to be sent'); 
        props.sendTasks(x);
    };
    return (
        <div>
            <h1>Add ToDo task</h1>
            <input type="text" name='task' placeholder='Add a Todo task' onChange={handle}/>
            <br/>
            <button className='btn btn-info m-1' onClick={()=>{addTask(x)}}>Add a task</button>
            {/* {
                data.map((elem,idx)=>
                    <div key={idx}>{elem}</div>
                )
            } */}
        </div>
    )
}

export default AddToDo