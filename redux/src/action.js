import { func } from "prop-types";


/* action type */
export const CHANGE_NAME = 'CHANGE_NAME'
export const ADD_COUNT = 'ADD_COUNT'

/* action creator */
export function changeName(name) {
    return {
        type : CHANGE_NAME,
        value: name
    }
}

export function addCount(count) {
    return {
        type : ADD_COUNT,
        value: count
    }
}
