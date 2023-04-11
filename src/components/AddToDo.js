import React from 'react';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { todosContext } from '../contexts/TodosContextProvider';

function AddToDo(props) {
    // let [data,setData] = useState([]);
    // let x='';
    // let handle=(event)=>{x=event.target.value;}
    // let addTask=(x)=>{
    //     // setData([...data,x])
    //     console.log('Data to be sent'); 
    //     props.sendTasks(x);
    // };
    let [todos,addNewTodo]=useContext(todosContext);
    let {register,handleSubmit,formState: {errors}} = useForm();
    let formSubmit=(todoObj)=>{
        addNewTodo(todoObj?.newTodo);
    }
    return (
        <div>
            {/* <h1>Add ToDo task</h1>
            <input type="text" name='task' placeholder='Add a Todo task' onChange={handle}/>
            <br/>
            <button className='btn btn-info m-1' onClick={()=>{addTask(x)}}>Add a task</button>
            {
                data.map((elem,idx)=>
                    <div key={idx}>{elem}</div>
                )
            } */}
            <form onSubmit={handleSubmit(formSubmit)}>
                <div className='mb-3'>
                    <label htmlFor='todo' className='form-label'>Enter new task:</label>
                    <input type="text" id='todo' className='form-control' {...register('newTodo')}/>
                </div>
                <button type='submit' className='btn btn-success'>Add</button>
                
            </form>
        </div>
    )
}

export default AddToDo