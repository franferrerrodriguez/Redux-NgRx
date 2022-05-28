import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/app.reducer';
import { IngressEgress } from 'src/app/models/ingress-egress.model';
import { User } from 'src/app/models/user.model';
import { IngressEgressService } from 'src/app/services/ingress-egress.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, OnDestroy {

  userSubs: Subscription;
  user?: User;
  ingressEgressSubs: Subscription;
  ingressEgressArray: IngressEgress[];

  constructor(private store: Store<AppState>,
              private ingressEgressService: IngressEgressService) { }

  ngOnInit(): void {
    this.ingressEgressSubs = this.store.select('ingressEgress').subscribe(ie => {
      this.ingressEgressArray = ie.items;
    });

    this.userSubs = this.store.select('user')
      .subscribe(state => this.user = state.user);
  }

  ngOnDestroy(): void {
    this.ingressEgressSubs.unsubscribe();
    this.userSubs.unsubscribe();
  }

  delete(uidItem?: string) {
    this.ingressEgressService.deleteIngressEgress(this.user?.uid, uidItem);
  }

}
