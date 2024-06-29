import { useContext, React} from "react"
import { removeToDo } from "../lib/api"
import { ActionTypes, ITodo } from "../lib/types"
import { TodoContext } from "../lib/context"


interface Props{
    todo:ITodo
    onDelete:ActionTypes
}

export const ToDoItem:React.FC<Props> = ({todo}) => {

    const context = useContext(TodoContext);

    if (!context) {
        throw new Error("Out of Provider...");
    }

    const {dispatch} = context


    const onDelete = async (id:number) => {

        const data = await removeToDo();

        dispatch({type: ActionTypes.remove, payload: data})
    }
    
    return <div className="item">
        <p>{todo.text}</p>
        <div>
            <button>Done</button>
            <button onClick ={() => onDelete(todo.id)}>Delete</button>
        </div>

    </div>
}

