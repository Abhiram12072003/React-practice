import { useState } from "react";
function Test(){
    let [condition,setCondition]=useState(false);
    // let conditon=true, c=false;
    let changeCond=()=>{setCondition(!condition)};
    return (<div>
        <h1>Demo of conditional Rendering</h1>
        {/* {conditon===true && <h1>True</h1>} */}
        {/* {c===true? <h1>Hello</h1> : <h1>Good bye</h1>} */}
        {condition===true? <button className="btn btn-warning" onClick={changeCond}>Greet</button>:<button className="btn btn-warning" onClick={changeCond}>Thanks</button>}
        {condition===true? <h1>Hello</h1>:<h1>Good bye</h1>}
    </div>)
}
export default Test;