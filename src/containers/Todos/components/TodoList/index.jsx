import React from 'react';
import './styles.css';

const TodoList = ({ todos, onCompleted }) => (
    <div style={{ width: '100%' }}>
        {todos.map(todo => (
            <div key={todo.id} className="todo__list border">
                <div style={{
                    textDecoration: todo.isCompleted ? 'line-through' : 'none',
                    opacity: todo.isCompleted ? '0.5' : '1'}}
                    className="element"
                    onDoubleClick={() => onCompleted(todo.id)}>
                    {todo.title}
                </div>
            </div>
        ))}
    </div>
);


export default TodoList;
