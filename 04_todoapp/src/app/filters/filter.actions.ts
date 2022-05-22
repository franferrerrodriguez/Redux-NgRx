import { createAction, props } from '@ngrx/store';

export const validFiltersArray: string[] = ['all', 'completed', 'pending'];
export type validFilters = typeof validFiltersArray[number];

export const setFilter = createAction(
    '[FILTER] Set filter',
    props<{ filter: validFilters }>()
);
