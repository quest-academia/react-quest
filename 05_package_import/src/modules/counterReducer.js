import { PUSH_PLUS, PUSH_MINUS } from 'vue';

const initialState = {
  num: 1,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case PUSH_PLUS:
      return {
        num: state.num + 1,
      };
    case PUSH_MINUS:
      return {
        num: state.num - 1,
      };
    default:
      return state;
  }
}
