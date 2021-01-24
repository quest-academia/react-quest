import { all } from 'redux-saga/effects';
import exporessController from '../controllers/exporessController';



export default function* routeSaga() {
  yield all([
    exporessController(),
  ]);
}
