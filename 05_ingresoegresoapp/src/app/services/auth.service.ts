import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth,
              private firestore: AngularFirestore ) { }

  initAuthListener() {
    this.auth.authState.subscribe(user => {
      console.log(user?.email);
    });
  }

  createUser(email: string, password: string): Promise<any> {
    return this.auth.createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        const newUser = new User(user?.uid, email, password);
        return this.firestore.doc(`${ user?.uid }/user`).set({...newUser});
      });
  }

  loginUser(email: string, password: string): Promise<any> {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    this.auth.signOut();
  }

  isAuth() {
    return this.auth.authState.pipe(
      map(user => !!user)
    )
  }

}
