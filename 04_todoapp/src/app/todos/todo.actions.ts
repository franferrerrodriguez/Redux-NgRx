import { createAction, props } from '@ngrx/store';
import { Todo } from './models/todo.model';

export const create = createAction(
    '[TODO] Create TODO',
    props<{ text: string }>()
);
