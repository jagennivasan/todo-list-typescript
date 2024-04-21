import RemoveBtn from "../RemoveBtn/RemoveBtn"
import Styles from "./TodoItem.module.css"


interface Todo {
    _id: string;
    todos: string;
  }
const getTodos = async (): Promise<{todos:Todo[]}> => {
    const apiUrl: string = process.env.NEXTAPI_URL || "";
    try {
      const res = await fetch(`${apiUrl}/api/todos`, {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch Todo items");
      }
      return res.json();
    } catch (error) {
      console.error("Error", error);
      return null;
    }
  };

export default async function ToDoItem(){
    const { todos } = await getTodos();

    return(
        <>
        {todos.map((t)=>(

      
        <div className={Styles.todoContainer}>
        <h1>{t.todos}</h1> 
        <div>
            <RemoveBtn/>
        </div>
        </div>
          ))}
        </>
    )
}