import RemoveBtn from "../RemoveBtn/RemoveBtn"
import Styles from "./TodoItem.module.css"
export default function ToDoItem(){
    return(
        <div className={Styles.todoContainer}>
        <h1>Todo items</h1> 
        <div>
            <RemoveBtn/>
        </div>
        </div>
    )
}