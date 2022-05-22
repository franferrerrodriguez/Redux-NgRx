import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import * as todoActions from './todo.actions';

export const initialState: Todo[] = [];

export const todoReducer = createReducer(
  initialState,
  on(todoActions.create, (state, todo) => [...state, todo]),
  on(todoActions.edit, (state, todo) => {
    return state.map(todoMap => {
      if (todoMap.id === todo.id) {
        return {
          ...todo
        }
      } else {
        return todoMap;
      }
    })
  }),
  on(todoActions.remove, (state, { id }) => state.filter(todoFilter => todoFilter.id !== id)),
  on(todoActions.checkAll, (state, { checkAll }) => {
    return state.map(todoMap => {
      return {
        ...todoMap,
        completed: checkAll
      };
    })
  }),
  on(todoActions.clearCompleted, (state) => state.filter(todoFilter => !todoFilter.completed)),
);
