import {combineReducers} from 'redux';
import todosReducer from '../containers/Todos/reducers/index';
import calculatorReducer from '../containers/Calculator/reducers/index';

const rootReducer = combineReducers({
    Todos: todosReducer,
    Calculator: calculatorReducer
});

export default rootReducer;