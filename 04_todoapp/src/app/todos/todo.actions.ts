import { createAction, props } from '@ngrx/store';
import { Todo } from './models/todo.model';

export const create = createAction(
    '[TODO] Create TODO',
    props<Todo>()
);

export const edit = createAction(
    '[TODO] Edit TODO',
    props<Todo>()
);

export const remove = createAction(
    '[TODO] Remove TODO',
    props<{ id: number }>()
);

export const checkAll = createAction(
    '[TODO] CheckAll TODO',
    props<{ checkAll: boolean }>()
);

export const clearCompleted = createAction('[TODO] ClearCompleted TODO');
