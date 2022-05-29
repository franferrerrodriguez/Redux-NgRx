import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user.model';

export const loadUsers = createAction('[Users Component] loadUsers');
export const loadUsersSuccess = createAction(
    '[List Component] loadUsersSuccess',
    props<{ users: User[] }>()
);
export const loadUsersError = createAction(
    '[List Component] loadUsersError',
    props<{ payload: any }>()
);
