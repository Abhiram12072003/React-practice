import { createContext,useState } from "react";
import AddToDo from "../components/AddToDo";

//Create context
export let todosContext=createContext();

//create context provider
function TodosContextProvider({children}){
    let [todos,setTodos] = useState([])
    return(
        <todosContext.Provider value={[todos,setTodos]}>
            {children}
        </todosContext.Provider>
    )
}

export default TodosContextProvider;
