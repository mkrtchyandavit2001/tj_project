import { ActionTypes, ITodo, type IAction, type IState } from "./types"

export const reducer = (state:IState, action:IAction) => {
    switch(action.type){
        case ActionTypes.put:
            return{
                ...state,
                todos: action.payload as ITodo[]
            }

        case ActionTypes.add:
            return{
                ...state,
                todos:[...state.todos, action.payload as ITodo]
            }
        case ActionTypes.remove:
            return{
                ...state,
                todos:  action.payload as ITodo[]
            }
        case ActionTypes.update:
            return{
                ...state,

            }
        default:
            return state
    }
}