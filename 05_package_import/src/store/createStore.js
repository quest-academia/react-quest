import {
    createStore as reduxCreateStore,
    applyMiddleware,
    combineReducers,
  } from "redux";
  import logger from "redux-logger";
  import createSagaMiddleware from "redux-saga";
  import rootReducer from "./rootReducer";
  import rootSaga from "./rootSaga";
  
  const sagaMiddleware = createSagaMiddleware();
  
  export default function createStore() {
    const store = reduxCreateStore(
      combineReducers(rootReducer),
      applyMiddleware(logger, sagaMiddleware)
    );
    sagaMiddleware.run(rootSaga);
    return store;
  }
  