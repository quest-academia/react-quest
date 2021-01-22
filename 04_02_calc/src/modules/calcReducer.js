import { ADD_CALC } from '../actions';

const initialState = {
    calcParams: [],
    answerParams: [],
};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_CALC:
        return{
            ...state,
            calcParams: state.calcParams.concat([action.payload.calcParam]),
            answerParams: state.answerParams.concat([action.payload.answerParam]),
      };
      
      default:
        return state;
  }
}
