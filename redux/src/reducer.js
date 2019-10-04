import * as act from './action'

const initialNameState = {
    name : '',
    count : 0
}

export function stateApp(state = initialNameState, action){
    switch (action.type){
        case act.CHANGE_NAME:
            return { ...state, name : action.value };
        case act.ADD_COUNT:
            return { ...state, count : action.value };
        default:
            return state;
    }
}