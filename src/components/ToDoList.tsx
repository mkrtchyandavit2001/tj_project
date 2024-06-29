import { AddToDo } from "./AddToDo"
// import { DeleteToDo } from "./DeleteToDo"
import { List } from "./List"

export const ToDoList:React.FC = () => {
    return <div className="todo-list">
        <AddToDo/>
        <List/>
    </div>
}