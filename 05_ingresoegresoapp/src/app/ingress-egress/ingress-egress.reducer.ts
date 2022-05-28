import { createReducer, on } from '@ngrx/store';
import { IngressEgress } from 'src/app/models/ingress-egress.model';
import { AppState } from '../app.reducer';
import * as actions from './ingress-egress.actions';

export interface State {
    items: IngressEgress[];
}

export interface StateWithIngressEgress extends AppState {
    ingressEgress: State
}

export const initialState: State = {
   items: [],
}

export const ingressEgressReducer = createReducer(
    initialState,
    on(actions.setItems, (state, { items }) => ({ ...state, items: [...items] })),
    on(actions.unsetItems, (state) => ({ ...state, items: [] })),
);
