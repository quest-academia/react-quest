import { ADD_CALC } from '../actions';

export const inputCalc = (calcParam) => ({
    type: INPUT_CALC,
    payload: {
        calcParam,
    }
});

export const inputAnswer = (answerParam) => ({
    type: INPUT_ANSWER,
    payload: {
        answerParam,
    }
});

export const addCalc = (calcParam, answerParam) => ({
    type: ADD_CALC,
    payload: {
        calcParam: calcParam,
        answerParam: answerParam,
    }
});