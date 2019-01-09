import React from 'react';
import './styles.css';

const TodoList = ({ todos, onCompleted }) => (
    <div style={{ width: '100%' }}>
        {todos.map(todo => (
            <div key={todo.get('id')} className="todo__list border">
                <div style={{
                    textDecoration: todo.get('isCompleted') ? 'line-through' : 'none',
                    opacity: todo.get('isCompleted') ? '0.5' : '1'}}
                    className="element"
                    onDoubleClick={() => onCompleted(todo.get('id'))}>
                    {todo.get('title')}
                </div>
            </div>
        ))}
    </div>
);


export default TodoList;
