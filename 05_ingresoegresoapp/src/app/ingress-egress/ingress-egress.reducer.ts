import { createReducer, on } from '@ngrx/store';
import { IngressEgress } from 'src/app/models/ingress-egress.model';
import * as actions from './ingress-egress.actions';

export interface State {
    items: IngressEgress[];
}

export const initialState: State = {
   items: [],
}

export const ingressEgressReducer = createReducer(
    initialState,
    on(actions.setItems, (state, { items }) => ({ ...state, items: [...items] })),
    on(actions.unsetItems, (state) => ({ ...state, items: [] })),
);
