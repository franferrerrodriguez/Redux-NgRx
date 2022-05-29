import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { UserService } from "src/app/services/user.service";
import * as usersActions from "../actions";

@Injectable()
export class UserEffects {

    constructor(
        private actions$: Actions,
        private usersService: UserService
    ) {}

    loadUser$ = createEffect(
        () => this.actions$.pipe(
            ofType(usersActions.loadUser),
            tap(data => console.log('Effect tap', data)),
            mergeMap(
                (action) => this.usersService.getUserById(action.id)
                    .pipe(
                        tap(data => console.log('getUserById() effect', data)),
                        map(user => usersActions.loadUserSuccess({ user: user })),
                        catchError(err => of(usersActions.loadUserError({ payload: err })))
                    )
            )
        )
    );

}
