import { TodoModel } from './TodoModel';
import { Record, List } from 'immutable';

export const TodosModel = Record ({
    todos: List(),
    filter: 'all'
});

export const initialStateTodos = new TodosModel({
    todos: List().unshift(new TodoModel()),
    filter: 'all'
})