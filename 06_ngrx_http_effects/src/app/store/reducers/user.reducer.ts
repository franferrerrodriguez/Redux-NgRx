import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import * as actions from '../actions/index';

export interface UserState {
    id: string | undefined,
    user: User | undefined,
    loaded: boolean,
    loading: boolean,
    error: any
}

export const userInitialState: UserState = {
   id: undefined,
   user: undefined,
   loading: false,
   loaded: false,
   error: null
}

export const userReducer = createReducer(
    userInitialState,
    on(actions.loadUser, (state, { id }) => ({
        ...state,
        id: id,
        loading: true
    })),
    on(actions.loadUserSuccess, (state, { user }) => ({
        ...state, 
        user: { ...user },
        loading: false,
        loaded: true,
        error: null
    })),
    on(actions.loadUserError, (state, { payload }) => ({
        ...state, 
        user: undefined,
        loading: false,
        loaded: true,
        error: {
            url: payload.url,
            name: payload.name,
            message: payload.message
        }
    })),
);
