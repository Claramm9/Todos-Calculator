// the reducer returns the next state
// Take two parameters: state and action
import { ADD_TODO, RESET_ALL, FILTER_TODO, CLEAR_TODOS_COMPLETED, COMPLETE_TODO } from '../actions/actionTypes';
import initialState from '../models';

const todosReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case ADD_TODO:
            return { ...state, todos: [action.payload, ...state.todos]};
        case COMPLETE_TODO:
            return { ...state, todos: action.payload}
        case RESET_ALL:
            return { ...state, todos:[]};
        case FILTER_TODO:
            return { ...state, filter: action.payload};
        case CLEAR_TODOS_COMPLETED:
            return { ...state, todos: action.payload}
        default:
            return state;
    }
}

export default todosReducer;