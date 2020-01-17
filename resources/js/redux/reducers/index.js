import {combineReducers} from "redux";
import {ADD_TODO, REMOVE_TODO , TOGGLE_TODO} from "../../constants";

const rootReducer = combineReducers({
    todos
});

function todos(state = [] , action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state ,
                {
                    title: action.payload ,
                    completed: false
                }
            ];
        case TOGGLE_TODO:
            return state.map((todo , index) => {
                if (index === action.index) {
                    todo.completed = !todo.completed;
                }
                return todo;
            });
        case REMOVE_TODO:
            return state.filter((todo , index) => todo.index !== action.index);
        default:
            return state;
    }
}

export default rootReducer;
