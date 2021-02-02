import { ADD_CALC } from '../actions';

const initialState = {
    calcParams: [],
};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_CALC:
        return{
            ...state,
            calcParams: state.calcParams.concat([action.payload.calcParam]),
      };
      
      default:
        return state;
  }
}
