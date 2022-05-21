import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement');
export const multiply = createAction('[Counter] Multiply', props<{ value: number }>());
export const divide = createAction('[Counter] Divide', props<{ value: number }>());
export const reset = createAction('[Counter] Reset');
