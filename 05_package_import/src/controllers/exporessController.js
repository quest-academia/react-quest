import axios from 'axios';
import { takeEvery, fork ,call } from 'redux-saga/effects';
import { GET_EXPRESS_REQUEST } from "../actions";
// import numberService from '../services/numberService';

function* getData() {
  yield call(
    axios.get('http://localhost:3333/').then(res => console.log(res)));
}

function* getExpress() {
  console.log('------- in yield');
  yield fork(getData, null)
}
// function* calc(action) {
//   yield fork(numberService.run, action);
// }

export default function* (){
  yield takeEvery(GET_EXPRESS_REQUEST, getExpress);
}
