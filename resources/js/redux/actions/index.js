import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from "../../constants";

export function addTodo(title) {
    return {
        type: ADD_TODO ,
        payload: title
    };
}

export function removeTodo(index) {
    return {
        type: REMOVE_TODO ,
        payload: index
    }
}

export function toggleTodo(index) {
    return {
        type: TOGGLE_TODO ,
        payload: index
    }
}
