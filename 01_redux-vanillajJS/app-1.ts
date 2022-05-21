import { Action } from "./ngrx-fake/ngrx";
import * as actions from "./counter/counter.actions";

export function contadorReducer(state = 10, action: Action) {
    switch (action.type) {
        case 'INCREMENTAR':
            return state += 1;
        case 'DISMINUIR':
            return state -= 1;
        case 'MULTIPLICAR':
            return state * action.payload;
        case 'DIVIDIR':
            return state / action.payload;
        case 'RESET':
            return state = 0;
        default:
            return state;
    }
}

console.log(contadorReducer(10, actions.increaseAction));
console.log(contadorReducer(10, actions.decreaseAction));
console.log(contadorReducer(10, actions.multiplyAction));
console.log(contadorReducer(10, actions.divideAction));
console.log(contadorReducer(10, actions.resetAction));