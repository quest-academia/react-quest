// Counterの値を保持したり、計算したりするモデルの宣言
import { 
  PUSH_PULS, 
  PUSH_MINUS 
} from "../actions";

const initialState = {
  num: 1,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case PUSH_PULS:
      return {
        num: state.num + 1
      };
    case PUSH_MINUS:
      return {
        num: state.num - 1
      };
    default:
      return state;
  }
}
