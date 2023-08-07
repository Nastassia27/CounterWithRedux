import {TasksStateType} from '../App';
import {TaskType} from '../Todolist';
import {v1} from 'uuid';
import {AddTodolistActionType, RemoveTodolistActionType} from './todolists-reducer';


type ActionsType = {}

const initialState: TasksStateType = {
    count: []
}

export const counterReducer = (state: TasksStateType = initialState, action: ActionsType): TasksStateType => {
    switch (action.type) {
        case '': {

            return state;
        }
        default:
            return state;
    }
}

export const removeTaskAC = ():  => {
    return {type: 'REMOVE-TASK', }
}

