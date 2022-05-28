import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from '../app.reducer';
import { IngressEgressService } from '../services/ingress-egress.service';
import * as ingressEgressActions from '../ingress-egress/ingress-egress.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  userSubs: Subscription;
  ingressEgressSubs: Subscription;

  constructor(private store: Store<AppState>, 
              private ingressEgressService: IngressEgressService) { }

  ngOnInit(): void {
    this.userSubs = this.store.select('user').subscribe(state => {
      this.ingressEgressSubs = this.ingressEgressService
        .initIngressEgressListener(state.user?.uid)
          .subscribe(ingressEgressItems => {
            this.store.dispatch(ingressEgressActions.setItems({ items: ingressEgressItems }));
          });
    });
  }

    
  ngOnDestroy(): void {
    this.userSubs.unsubscribe();
    this.ingressEgressSubs.unsubscribe();
  }

}
