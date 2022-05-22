import { createReducer, on } from '@ngrx/store';
import * as todoActions from './filter.actions';

export const initialState: todoActions.validFilters = 'all';

export const filterReducer = createReducer(
  initialState,
  on(todoActions.setFilter, (state, { filter }) => filter)
);
