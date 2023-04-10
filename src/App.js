import './App.css';
// import Paren from './components/Paren';
// import One from './components/One/One';
// import EventDemo from './components/EventDemo/EventDemo';
// import UserData from './components/EventDemo/UsersData';
// import man from './images/man.jpg';
// import {AiFillSave} from 'react-icons/ai';
// import Test from './components/Test';
// import Parent from './components/Parent';
// import FetchData from './components/FetchData';
// import Formdemo from './components/Formdemo';
import AddToDo from './components/AddToDo';
import ToDoList from './components/ToDoList';
import ToDoCount from './components/ToDoCount';
import { useState } from 'react';
function App() {
  // let x="Abhiram";
  let [tasks,setTasks] = useState([]);
  let getTasks=(data)=>{
    setTasks([...tasks,data])
    console.log('Data received');
  };
  return (
    <div className="App">
      {/* <One x={x}/> */}
      {/* <EventDemo /> */}
      {/* <UserData /> */}
      {/* <h1 className='display-3'>Welcome to react</h1>
      <img src={man} alt="" width="25%" height="25%"/>
      <br/>
      <button className='btn btn-warning'><AiFillSave/>Save</button>
      <Test/> */}
      {/* <Parent/> */}
      {/* <Paren/> */}
      {/* <FetchData /> */}
      {/* <Formdemo/> */}
      <div className='row text-center border p-1 m-2'>
        <div className='col-3'> <AddToDo sendTasks={getTasks}/> </div>
        <div className='col-3'> <ToDoList tasks={tasks}/> </div>
        <div className='col-3'> <ToDoCount cnt={tasks.length}/> </div>
        {/* {
          tasks.map((elem,idx)=><div key={idx}>{elem}</div>)
        } */}
      </div>
    </div>
  );
}

export default App;
