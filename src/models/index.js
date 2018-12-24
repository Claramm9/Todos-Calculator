import * as initialStateTodos from '../containers/Todos/models';
import * as initialStateCalculator from '../containers/Calculator/models';

const initialState = {
    Todos: initialStateTodos.default,
    Calculator: initialStateCalculator.default
}

export default initialState;