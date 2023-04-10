import { useState,useEffect } from "react";
function FetchData(){
    let [data,setData]=useState([]);
    useEffect(()=>{
        fetch(`https://dummyjson.com/products`)
        .then(res=>res.json())
        .then(data=>setData(data.products))
        .catch(err=>console.log(err));
        console.log(data);
    },[]);

    return(<div>
        <h1>Fetch data using fetch</h1>
        <table>
            <thead>
                <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Price</th>
                </tr>
            </thead>
            <tbody>
            {
                data.map((d,index)=><tr key={index}>
                    <td>{d.title}</td>
                    <td>{d.description}</td>
                    <td>{d.price}</td>
                </tr>)
            }
            </tbody>
        </table>
            <div className="row">{
            data.map((d,idx)=><div className="border col-3" key={idx}>
                <p>Title: {d.title}</p>
                <p>Description: {d.description}</p>
                <p>Price: {d.price}</p>
            </div>)
            }
            </div>
        </div>);
}
export default FetchData;