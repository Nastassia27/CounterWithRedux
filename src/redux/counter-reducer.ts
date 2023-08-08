import {ChangeEvent} from "react";

const initialState = {
    minValue: 0,
    maxValue: 1,
    counter: 0,
    buttonClicked: false,
    previousMinValue: 0,
    previousMaxValue: 0,
}
type InitialStateType = typeof initialState

const CHANGE_MAX = 'CHANGE-MAX'
const CHANGE_MIN = 'CHANGE-MIN'
const CHANGE_COUNTER = 'CHANGE-COUNTER'
const RESET_COUNTER = 'RESET-COUNTER'
const SET_VALUE = 'SET-VALUE'

export const counterReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case CHANGE_MAX: {
            return {
                ...state,
                maxValue: Number(action.payload.target.value),
                buttonClicked: false
            };
        }
        case CHANGE_MIN: {
            return {
                ...state,
                minValue: Number(action.payload.target.value),
                buttonClicked: false
            };
        }
        case CHANGE_COUNTER:
            return {
                ...state,
                counter: state.counter < state.previousMaxValue ? state.counter + 1 : state.counter
            };
        case RESET_COUNTER: {
            return {...state, counter: state.previousMinValue};
        }
        case SET_VALUE: {
            return {
                ...state,
                previousMaxValue: state.previousMaxValue,
                previousMinValue: state.previousMinValue,
                buttonClicked: true,
                counter: state.minValue
            };
        }

        default:
            return state;
    }
}

export type ActionTypes =
    ReturnType<typeof onChangeMaxAC>
    | ReturnType<typeof onChangeMinAC>
    | ReturnType<typeof changeCounterAC>
    | ReturnType<typeof resetCounterAC>
    | ReturnType<typeof setValueAC>
export const onChangeMaxAC = (event: ChangeEvent<HTMLInputElement>) => {
    return {type: 'CHANGE-MAX', payload: event} as const
}

export const onChangeMinAC = (event: ChangeEvent<HTMLInputElement>) => {
    return {type: 'CHANGE-MIN', payload: event} as const
}

export const changeCounterAC = () => {
    return {type: 'CHANGE-COUNTER',} as const
}
export const resetCounterAC = () => {
    return {type: 'RESET-COUNTER',} as const
}
export const setValueAC = () => {
    return {type: 'SET-VALUE',} as const
}


