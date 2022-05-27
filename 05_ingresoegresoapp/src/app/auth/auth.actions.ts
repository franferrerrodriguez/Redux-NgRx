import { createAction, props } from '@ngrx/store';
import { User } from '../models/user.model';

export const setAuthUser = createAction(
    '[Auth Component] setAuthUser',
    props<{ user: User }>()
);
export const unsetAuthUser = createAction('[Auth Component] unsetAuthUser');
