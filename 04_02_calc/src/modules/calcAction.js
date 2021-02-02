import { ADD_CALC } from '../actions';

export const addCalc = (calcParam) => ({
    type: ADD_CALC,
    payload: {
        calcParam: calcParam,
    }
});