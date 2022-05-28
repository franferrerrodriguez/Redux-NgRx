import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { StateWithIngressEgress } from '../ingress-egress.reducer';

@Component({
  selector: 'app-stadistic',
  templateUrl: './stadistic.component.html',
  styleUrls: ['./stadistic.component.css']
})
export class StadisticComponent implements OnInit, OnDestroy {

  ingressEgressSubs: Subscription;

  totalAmountIngress: number;
  totalAmountEgress: number;
  differenceAmountIngressEgress: number;

  constructor(private store: Store<StateWithIngressEgress>) { }

  ngOnInit(): void {
    this.ingressEgressSubs = this.store.select('ingressEgress').subscribe(state => {
      this.totalAmountIngress = state.items
        .filter(e => e.type === 'ingress')
        .map(e => e.amount ? e.amount : 0)
        .reduce((a, b) => a + b, 0);

      this.totalAmountEgress = state.items
        .filter(e => e.type === 'egress')
        .map(e => e.amount ? e.amount : 0)
        .reduce((a, b) => a + b, 0);

      this.differenceAmountIngressEgress = this.totalAmountIngress - this.totalAmountEgress;
    });
  }

  ngOnDestroy(): void {
    this.ingressEgressSubs.unsubscribe();
  }

}
