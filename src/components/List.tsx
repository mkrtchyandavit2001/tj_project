import { useContext } from "react"
import { TodoContext } from "../lib/context"
import { ToDoItem } from "./ToDoItem"

export const List:React.FC = () => {
    const context = useContext(TodoContext)
    if(!context){
        throw new Error("Outsite of a Provider...")
    }

    const {state} = context

    return <div className="list, completed">
        {
            state.todos.map(todo => <ToDoItem key = {todo.id} todo = {todo} onDelete={onDelete}/>)
        }
    </div>
}