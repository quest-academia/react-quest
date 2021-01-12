import { PUSH_PLUS, PUSH_MINUS } from '../actions';

export function plus(){
  return {
    type:PUSH_PLUS,
  }
}

export function minus(){
  return {
    type: PUSH_MINUS,
  };
}
