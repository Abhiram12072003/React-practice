import { createContext,useState } from "react";

//Create context
export let todosContext=createContext();

//create context provider
function TodosContextProvider({children}){
    let [todos,setTodos] = useState([]);
    let addNewTodo = (todo) => {
        setTodos([...todos,todo]);
    }
    return(
        <todosContext.Provider value={[todos,addNewTodo]}>
            {children}
        </todosContext.Provider>
    )
}

export default TodosContextProvider;
