const NUMBERBUTTON = "NUMBERBUTTON";
const SYMBOLBUTTON = "SYMBOLBUTTON";
const CLICKCLEARBUTTON = "CLICKCLEARBUTTON";
const CLICKEQUALBUTTON = "CLICKEQUALBUTTON";

const numberbutton = (num) => {
  return {
    type: NUMBERBUTTON,
    payload: num,
  };
};

const symbolbutton = (symbol) => {
  return {
    type: SYMBOLBUTTON,
    payload: symbol,
  };
};

const clickClearButton = () => {
  return {
    type: CLICKCLEARBUTTON,
  };
};

const clickEqualButton = () => {
  return {
    type: CLICKEQUALBUTTON,
  };
};

// const find = (text) => {
//   return {
//     type: FIND,
//     payload: text,
//   };
// };

// const del = (num) => {
//   return {
//     type: DEL,
//     payload: num,
//   };
// };

// const add = (text) => {
//   return {
//     type: ADD,
//     payload: text,
//   };
// };

const initialState = [
  { leftParam: "" },
  { rightParam: "" },
  { symbol: "" },
  { viewdata: [{ message: "sample" }] },
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NUMBERBUTTON:
      if (!state[2].symbol) {
        state[0].leftParam = state[0].leftParam + String(action.payload);
      } else {
        state[1].rightParam = state[1].rightParam + String(action.payload);
      }
      let newdata = state;
      return { ...state, newdata };
    case SYMBOLBUTTON:
      state[2].symbol = action.payload;
      let newdata2 = state;
      return { ...state, newdata2 };
    case CLICKCLEARBUTTON:
      state = {
        leftParam: "",
        rightParam: "",
        symbol: "",
      };
      return state;
    case CLICKEQUALBUTTON:
      const leftParam = state[0].leftParam;
      const rightParam = state[1].rightParam;
      const symbol = state[2].symbol;
      const leftNum = Number(leftParam);
      const rightNum = Number(rightParam);
      let result = 0;
      if (symbol === "/") {
        result = leftNum / rightNum;
      } else if (symbol === "x") {
        result = leftNum * rightNum;
      } else if (symbol === "-") {
        result = leftNum - rightNum;
      } else {
        result = leftNum + rightNum;
      }
      let data = { message: `${leftNum} ${symbol} ${rightNum} = ${result}` };
      let newviewdata = state[3].viewdata.slice();
      newviewdata.push(data);
      const newdata3 = [
        { leftParam: result },
        { rightParam: "" },
        { symbol: "" },
        { viewdata: newviewdata },
      ];
      return newdata3;
    default:
      return state;
  }
};

export { numberbutton, symbolbutton, clickClearButton, clickEqualButton };
export default reducer;
