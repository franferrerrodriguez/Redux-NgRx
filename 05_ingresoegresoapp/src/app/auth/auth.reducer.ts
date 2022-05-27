import { createReducer, on } from '@ngrx/store';
import { User } from '../models/user.model';
import * as actions from './auth.actions';

export interface State {
    user?: User; 
}

export const initialState: State = {
   user: undefined
}

export const authReducer = createReducer(
    initialState,
    on(actions.setAuthUser, (state, { user }) => ({ ...state, user: { ...user } })),
    on(actions.unsetAuthUser, (state) => ({ ...state, user: undefined })),
);
