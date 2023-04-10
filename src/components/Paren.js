import { useState } from "react";
import Chile from "./Chile";
function Paren(){
    let [data,setData]=useState('');
    let getData=(data)=>{setData(data)};
    return (<div>
        Parent 
        Data from child is {data}
        <Chile func={getData}/>
    </div>)
}

export default Paren;