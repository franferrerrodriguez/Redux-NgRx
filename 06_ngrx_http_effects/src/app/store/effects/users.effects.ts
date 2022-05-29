import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { UserService } from "src/app/services/user.service";
import * as usersActions from "../actions";

@Injectable()
export class UsersEffects {

    constructor(
        private actions$: Actions,
        private usersService: UserService
    ) {}

    loadUsers$ = createEffect(
        () => this.actions$.pipe(
            ofType(usersActions.loadUsers),
            tap(data => console.log('Effect tap', data)),
            mergeMap(
                () => this.usersService.getUsers()
                    .pipe(
                        tap(data => console.log('getUsers() effect', data)),
                        map(users => usersActions.loadUsersSuccess({ users: users })),
                        catchError(err => of(usersActions.loadUsersError({ payload: err })))
                    )
            )
        )
    );

}
