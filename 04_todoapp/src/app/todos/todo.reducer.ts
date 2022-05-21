import { createReducer, on } from '@ngrx/store';
import { create } from './todo.actions';
import { Todo } from './models/todo.model';

export const initialState: Todo[] = [new Todo('prueba')];

export const todoReducer = createReducer(
  initialState,
  on(create, (state, { text }) => [...state, new Todo(text)])
);
