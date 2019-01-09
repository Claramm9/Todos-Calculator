import { Record } from 'immutable';

export const CalculatorModel = Record ({
    display: '0',
    isFinished: false
});

export const initialStateCalculator = new CalculatorModel();