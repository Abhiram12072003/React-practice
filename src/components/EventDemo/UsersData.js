import { useState } from "react";
function UserData(){
    let [user,setUser]=useState({name:'Ravi',age:20,city:'Hyderabad'})
    let changeUser=()=>{setUser({name:"Rama"})}
    let changeName=()=>{setUser({...user,name:'Rama'})}
    return (<div>
        <h2 className="text-danger">Name: {user.name}</h2>
        <h2>Age: {user.age}</h2>
        <h2>City: {user.city}</h2>
        <button type="" onClick={changeUser}>Change name</button>
        <button type="" onClick={changeName}>Change name</button>
    </div>);
}
export default UserData;