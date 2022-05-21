import { createAction, props } from '@ngrx/store';
import { Todo } from './todos/models/todo.model';

export const create = createAction(
    '[TODO] Create TODO',
    props<Todo>()
);
