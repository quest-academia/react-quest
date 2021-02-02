import { createStore } from "redux";
import reducer from "./module";

const store = createStore(reducer);

export default store;
