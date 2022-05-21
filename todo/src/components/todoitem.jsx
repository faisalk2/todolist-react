import React from 'react'
import styles from "./todo.module.css"
const Todoitem = ({todo}) => {
    const [isCompleted, setIsComppleted]=React.useState(todo.isCompleted);
  return (
    <div className={styles.todo} key={todo.id} >
    <input type="checkbox" Checked={isCompleted} onChange={(e)=>{
        setIsComppleted(e.target.checked);
        // console.log(e.target.checked);
    }}></input>
    <div className={isCompleted==true ? styles.line:""}>{todo.value}</div>
    </div>
  )
}

export default Todoitem