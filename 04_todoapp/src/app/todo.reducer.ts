import { createReducer, on } from '@ngrx/store';
import { create } from './todo.actions';
import { Todo } from './todos/models/todo.model';

export const initialState: Todo[] = [];

export const todoReducer = createReducer(
  initialState,
  on(create, (state, { text }) => [...state, new Todo(text)])
);
