import { useState } from "react";
function EventDemo(){
    let [a,setA]=useState(100);
    let test=()=>{
        setA(a+1);
        console.log('Click event is ',a);
    }
    let inc=()=>{setA(a+1)};
    let dec=()=>(setA(a-1));
    return (<div>
        <h1>This is Event Demo</h1>
        <h1>Value of a is {a}</h1>
        <button type="" onClick={()=>test()}>Click here</button>
        <h1>Counter Demo</h1>
        <h1>a: {a}</h1>
        <button onClick={inc}>Increment</button>
        <button type="" onClick={dec}>Decrement</button>
    </div>);
}
export default EventDemo;