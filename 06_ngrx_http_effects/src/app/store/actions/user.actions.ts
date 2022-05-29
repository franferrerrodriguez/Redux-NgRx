import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user.model';

export const loadUser = createAction(
    '[Detail Component] loadUser',
    props<{ id: string }>()
);
export const loadUserSuccess = createAction(
    '[Detail Component] loadUserSuccess',
    props<{ user: User }>()
);
export const loadUserError = createAction(
    '[Detail Component] loadUserError',
    props<{ payload: any }>()
);
