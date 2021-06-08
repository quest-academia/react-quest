import {INPUT_LEFT} from '../actions/action';

const initialState = {
  leftParam: "",
  rightParam: "",
  symbol: "",
};
// ...オブジェクトの中身を展開して渡す
export function calcReducer(state = initialState, action) {
  switch (action.type) {
    case INPUT_LEFT:
      return {
        ...state,
        leftParam: state.param,
        rightParam: '',
        symbol: ''
      };
    default:
      return state;
  }
}
