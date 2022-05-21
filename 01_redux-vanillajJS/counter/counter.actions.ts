import { Action } from "../ngrx-fake/ngrx";

export const increaseAction: Action  = {
    type: 'INCREMENTAR'
};

export const decreaseAction: Action  = {
    type: 'DISMINUIR'
};

export const multiplyAction: Action  = {
    type: 'MULTIPLICAR',
    payload: 2
};

export const divideAction: Action  = {
    type: 'DIVIDIR',
    payload: 20
};

export const resetAction: Action  = {
    type: 'RESET'
};
