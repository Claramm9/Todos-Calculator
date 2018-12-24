import {combineReducers} from 'redux';
import todosReducer from '../containers/Todos/reducers/todosReducer';
import calculatorReducer from '../containers/Calculator/reducers/calculatorReducer';

const rootReducer = combineReducers({
    Todos: todosReducer,
    Calculator: calculatorReducer
});

export default rootReducer;