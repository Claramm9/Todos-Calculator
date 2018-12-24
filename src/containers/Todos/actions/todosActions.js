import { ADD_TODO, RESET_ALL, FILTER_TODO, CLEAR_TODOS_COMPLETED, COMPLETE_TODO } from './actionTypes';


export const addTodo = todo => ({ 
    type: ADD_TODO, 
    payload: todo 
});

export const completeTodo = todos => ({
    type: COMPLETE_TODO,
    payload: todos
});

export const resetTodos = () => ({
    type: RESET_ALL
});

export const filterTodo = filter => ({
    type: FILTER_TODO,
    payload: filter
});

export const clearCompleted = todos => ({
    type: CLEAR_TODOS_COMPLETED,
    payload: todos
})