import { CLICK_BUTTON, CLEAR_DISPLAY } from './actionTypes';

export const clickButton = ({change}) => ({
    type: CLICK_BUTTON,
    payload: {change}
});

export const clearDisplay = () => ({
    type: CLEAR_DISPLAY
});
