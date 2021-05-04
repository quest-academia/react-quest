// reduxの適応をする。パッケージを導入。半分おまじない。
import {
  createStore as reduxCreateStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import logger from "redux-logger"; // モデルのデータを変更する際にその内容をconsoleに表示してくれるパッケージ
import createSagaMiddleware from "redux-saga"; // reduxの変遷を担当
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
