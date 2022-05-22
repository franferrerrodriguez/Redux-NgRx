import { ActionReducerMap } from "@ngrx/store";

import { Todo } from "./todos/models/todo.model";
import { todoReducer } from './todos/todo.reducer';
import { filterReducer } from './filters/filter.reducer';
import { validFilters } from "./filters/filter.actions";

export interface AppState {
    todos: Todo[],
    filter: validFilters
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filter: filterReducer
}
