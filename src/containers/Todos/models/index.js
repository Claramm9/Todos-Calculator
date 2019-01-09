import { Record, List } from 'immutable';
import { TodoModel } from './TodoModel';

export const TodosModel = Record ({
    todos: List(),
    filter: 'all'
});

export const initialStateTodos = new TodosModel({
    todos: List().unshift(new TodoModel()),
    filter: 'all'
})