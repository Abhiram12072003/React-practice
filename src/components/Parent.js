import Child from "./Child";
import { useState } from "react";

function Parent(){
    let data='Data from parent';
    let [dataFromChild,setDataFromChild]=useState('');
    let getDataFromChild=(data)=>{setDataFromChild(data)}
    return(<div>
        <Child data={data} getDataFromChild={getDataFromChild}/>
        <h2>{dataFromChild}</h2>
    </div>);
}
export default Parent;