import { all } from "redux-saga/effects";

// functionに * (アスタリスク)がついた関数をGenerator関数という
// Generator関数は非同期処理ができる。
function* test() {
  return {};
}

function* generetorFunc() {
  yield test();
}

export default function* routeSaga() {
  yield all([generetorFunc()]);
}
