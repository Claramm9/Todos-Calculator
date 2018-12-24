import { CLICK_BUTTON, CLEAR_DISPLAY } from '../actions/actionTypes';
import initialState from '../models';

const calculatorReducer = (state = initialState, action) => {
    switch (action.type){
        case CLICK_BUTTON:
            return { ...state, display: action.payload.change.display, isFinished: action.payload.change.isFinished };
        case CLEAR_DISPLAY:
            return { ...state, display: initialState.display, isFinished: initialState.isFinished};
        default:
            return state;
    }
}

export default calculatorReducer;