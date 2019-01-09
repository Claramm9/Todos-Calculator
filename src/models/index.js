import { initialStateTodos } from '../containers/Todos/models';
import { initialStateCalculator } from '../containers/Calculator/models';

const initialState = {
    Todos: initialStateTodos.default,
    Calculator: initialStateCalculator.default
}

export default initialState;