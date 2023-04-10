function Child(props) {
    let childData='Data from child';
    return (<div>
        Data from parent is {props.data}
        <br/>
        <button className="btn btn-warning" onClick={()=>{props.getDataFromChild(childData)}}>Send data to parent</button>
    </div>);
}

export default Child;