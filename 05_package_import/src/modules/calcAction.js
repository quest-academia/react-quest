// ボタンを押したときの関数の発火をReduxに流す
import { PUSH_MINUS, PUSH_PULS } from "../actions";

export function plus() {
  return {
    type: PUSH_PULS,
  }
}

export function minus() {
  return {
    type: PUSH_MINUS,
  }
}
