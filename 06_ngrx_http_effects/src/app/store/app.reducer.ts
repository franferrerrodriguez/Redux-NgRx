import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';

export interface AppState {
  user: reducers.UserState;
  users: reducers.UsersState;
}

export const appReducers: ActionReducerMap<AppState> = {
  user: reducers.userReducer,
  users: reducers.usersReducer,
};
