import { initialStateTodos } from '../models';
import { ADD_TODO, RESET_ALL, FILTER_TODO, CLEAR_TODOS_COMPLETED, COMPLETE_TODO } from '../actions/actionTypes';

const todosReducer = (state = initialStateTodos, action) => {
    console.log(action)
    switch (action.type) {
        case ADD_TODO:
            //const todos = state.get('todos').unshift(action.payload);           
            //return state.set('todos', todos);
            return state.update('todos', (todos) => todos.unshift(action.payload))
        case COMPLETE_TODO:
            return state.set('todos',action.payload)
        case RESET_ALL:
            return state.clear();
        case FILTER_TODO:
            console.log(action.payload)
            return state.set('filter', action.payload);
        case CLEAR_TODOS_COMPLETED:
            return state.set('todos', action.payload);
        default:
            return state;
    }
}

export default todosReducer;