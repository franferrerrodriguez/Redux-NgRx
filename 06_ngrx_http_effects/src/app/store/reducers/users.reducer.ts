import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import * as actions from '../actions/index';

export interface UsersState {
    users: User[],
    loaded: boolean,
    loading: boolean,
    error: any
}

export const usersInitialState: UsersState = {
   users: [],
   loading: false,
   loaded: false,
   error: null
}

export const usersReducer = createReducer(
    usersInitialState,
    on(actions.loadUsers, (state) => ({ ...state, loading: true })),
    on(actions.loadUsersSuccess, (state, { users }) => ({
        ...state, 
        users: [...users],
        loading: false,
        loaded: true,
        error: null
    })),
    on(actions.loadUsersError, (state, { payload }) => ({
        ...state, 
        users: [],
        loading: false,
        loaded: true,
        error: {
            url: payload.url,
            name: payload.name,
            message: payload.message
        }
    })),
);
