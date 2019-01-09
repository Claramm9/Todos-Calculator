import '../../styles.css';
import { Map } from 'immutable';
import { connect } from 'react-redux';
import Footer from './components/Footer';
import React, { Component } from 'react';
import TodoList from './components/TodoList';
import Modal from '../../components/Modal/Modal';
import { addTodo, completeTodo, resetTodos, filterTodo, clearCompleted } from './actions/todosActions';

class ConnectedTodos extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: ''
        };
    }

    onFieldChange = (event) => {
        this.setState({
            inputValue: event.target.value
        });
    }

    onKeyPress = (event) => {
        if(event.which === 13 && this.state.inputValue !== '') {
            const todo = Map({
                id: this.props.todos.size + 1,
                title: this.state.inputValue,
                isCompleted: false
            });
            this.props.addTodo(todo);
            this.setState(() => ({
                inputValue: ''
            }));
        }
    }

    sendData = (data) => {
        this.props.filterTodo(data);
    }

    isCompleted = (todo) => {
        const { filter } = this.props

        if(filter === 'active'){
            return todo.get('isCompleted') === false;
        }else if(filter === 'completed'){
            return todo.get('isCompleted') === true;
        }else if(filter === 'all'){
            return true;
        }
    }

    onCompleted = (id) => {
        const todos = this.props.todos.map(todo => {
            return todo.get('id') === id ? todo.set('isCompleted', !(todo.get('isCompleted'))) : todo
        });
        this.props.completeTodo(todos);
    }

    resetAll = () => {
        this.props.resetTodos();
    }

    clearCompleted = () => {
        const todos = this.props.todos.filter(todo => todo.get('isCompleted') === false)
        this.props.clearCompleted(todos);
    }

    render() {
        
        const todosFiltered = this.props.todos.filter(this.isCompleted);
        
        return(
            <>
            <div className="App">
                <div className="title">
                    <h1 className="title">todos</h1>
                </div>
                <Modal onConfirm={this.resetAll}>
                    <button className="reset-button">
                        Reset
                    </button>
                </Modal>
                
                <div className="todos">
                    <div className="todos_input border">
                        <input
                            type="text"
                            placeholder="What needs to be done?"
                            value={this.state.inputValue}
                            onChange={this.onFieldChange}
                            onKeyPress={this.onKeyPress}
                        ></input>
                    </div>
                    <TodoList todos={todosFiltered} onCompleted={this.onCompleted} />

                </div>
                {<Footer 
                    item={todosFiltered.size}
                    onSend={this.sendData}
                    onModal={this.clearCompleted}/>}
            </div>
            </>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addTodo: todo => dispatch(addTodo(todo)),
        completeTodo: todos => dispatch(completeTodo(todos)),
        resetTodos: () => dispatch(resetTodos()),
        filterTodo: filter => dispatch(filterTodo(filter)),
        clearCompleted: todos => dispatch(clearCompleted(todos))
    };
}

const mapStateToProps = ({ Todos }) => ({ 
    todos: Todos.get('todos'),
    filter: Todos.get('filter')
})

const Todos = connect(mapStateToProps, mapDispatchToProps)(ConnectedTodos);

export default Todos;
