import { PUSH_MINUS, PUSH_PLUS } from "../actions";

export function pushPlus(){
    return {
        type: PUSH_PLUS,
    };
}

export function pushMinus() {
    return {
        type: PUSH_MINUS,
    }
}