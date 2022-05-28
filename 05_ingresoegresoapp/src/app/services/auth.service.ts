import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, Observable, Subscription } from 'rxjs';
import { User } from '../models/user.model';
import * as authActions from '../auth/auth.actions';
import * as ingressEgressActions from '../ingress-egress/ingress-egress.actions';
import { AppState } from '../app.reducer';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user?: User;

  constructor(private auth: AngularFireAuth,
              private firestore: AngularFirestore,
              private store: Store<AppState>) { }

  initAuthListener(): void  {
    this.auth.authState.subscribe(user => {
      if (user && user.email) {
        this.user = { uid: user.uid, email: user.email };
        this.store.dispatch(authActions.setAuthUser({ user: this.user }));
      } else {
        this.user = undefined;
        this.store.dispatch(ingressEgressActions.unsetItems());
        this.store.dispatch(authActions.unsetAuthUser());
      }
    });
  }

  createUser(email: string, password: string): Promise<any> {
    return this.auth.createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        return this.firestore.doc(`${ user?.uid }/user`).set({...this.user});
      });
  }

  loginUser(email: string, password: string): Promise<any> {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logout(): void {
    this.auth.signOut();
  }

  isAuth(): Observable<any> {
    return this.auth.authState.pipe(
      map(user => !!user)
    )
  }

}
