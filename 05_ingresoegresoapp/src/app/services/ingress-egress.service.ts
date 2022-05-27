import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { IngressEgress } from '../models/ingress-egress.model';
import { User } from '../models/user.model';
import { AuthService } from './auth.service';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngressEgressService {

  constructor(private firestore: AngularFirestore) { }

  initIngressEgressListener(uid?: string): Observable<any> {
    return this.firestore.collection(`${ uid }/ingress-egress/items`)
      .snapshotChanges()
      .pipe(
        map(snapshot => snapshot.map(doc => ({
          ...doc.payload.doc.data() as IngressEgress,
          uid: doc.payload.doc.id
        })))
      );
  }

  createIngressEgress(userUid?: string, ingressEgress?: IngressEgress): Promise<void> {
    return this.firestore.doc(`${ userUid }/ingress-egress`)
      .collection('items')
      .add({ ...ingressEgress })
      .then(() => console.log('exito', userUid))
      .catch(err => console.warn(err));
  }

  deleteIngressEgress(userUid?: string, uidItem?: string) {
    if (window.confirm(`¿Está seguro que desea eliminar el item: ${ uidItem }?`)) {
      this.firestore.doc(`${ userUid }/ingress-egress/items/${ uidItem }`).delete()
      .then(() => alert('El item se ha eliminado correctamente.'))
      .catch(err => alert(err));
    }
  }
  
}
