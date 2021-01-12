import { all } from 'redux-saga/effects';

function* test() {
  return {};
}
function* generatorFunc() {
  yield test;
}

export default function* routeSaga() {
  yield all([generatorFunc]);
}
