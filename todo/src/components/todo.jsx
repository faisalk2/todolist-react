import React from "react"
import styles from "./todo.module.css"
import Todoitem from "./todoitem";
const Todo=()=>{
    let [newTodo,setTodo]=React.useState("");
    const [todos,setTodos]=React.useState([]);

   

return (
<>
<h1>Todo App</h1>
<input className={styles.input} type="text" value={newTodo} onChange={(e)=>setTodo(e.target.value)} />
    <button className={styles.btn} onClick={()=>{
        setTodos([...todos,{id:Date.now(),
        value:newTodo,
        isCompleted:false}
        
    ]);
    setTodo("");   
    }}>+</button>
    {/* TODOS */}
    {todos.map((todo)=>(
       <Todoitem key={todo.id} todo={todo}/>
    ))}
</>
)
}

export default Todo;