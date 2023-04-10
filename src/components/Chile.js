import { useState } from "react";

function Chile(props){
    let [data,setData] =useState('Hi how are you');
    let update=(event)=>{setData(event.target.value)};
    return (<div>
        Child
        U want to edit?
        <input type="text" name="data" value={data} onChange={update}/>
        <button className="btn btn-warning" onClick={()=>{props.func(data)}}>Send data to parent</button>
    </div>)
    
}

export default Chile;