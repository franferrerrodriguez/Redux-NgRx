import { ActionReducerMap } from "@ngrx/store";
import * as uiReducer from './shared/ui.reducer';
import * as authReducer from './auth/auth.reducer';
import * as ingressEgressReducer from './ingress-egress/ingress-egress.reducer';

export interface AppState {
    ui: uiReducer.State,
    user: authReducer.State,
    //ingressEgress: ingressEgressReducer.State
}

export const appReducers: ActionReducerMap<AppState> = {
    ui: uiReducer.uiReducer,
    user: authReducer.authReducer,
    //ingressEgress: ingressEgressReducer.ingressEgressReducer
}
