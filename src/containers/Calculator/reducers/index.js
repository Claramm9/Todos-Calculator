import { CLICK_BUTTON, CLEAR_DISPLAY } from '../actions/actionTypes';
import { initialStateCalculator } from '../models';

const calculatorReducer = (state = initialStateCalculator, action) => {
    switch (action.type){
        case CLICK_BUTTON:
            return state.set('display', action.payload.change.display).set('isFinished', action.payload.change.isFinished);
        case CLEAR_DISPLAY:
            return state.set('display', initialStateCalculator.display).set('isFinished', initialStateCalculator.isFinished)
        default:
            return state;
    }
}

export default calculatorReducer;