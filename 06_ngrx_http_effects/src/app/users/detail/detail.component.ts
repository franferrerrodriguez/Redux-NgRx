import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import * as userActions from 'src/app/store/actions';
import { loadUser } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, OnDestroy {

  routerSubs?: Subscription;
  storeSubs?: Subscription;
  user?: User;
  loading: boolean = false;
  error: any = null;

  constructor(private router: ActivatedRoute,
              private store: Store<AppState>) { }

  ngOnInit(): void {
    this.routerSubs = this.router.params.subscribe(({ id }) => {
      this.store.dispatch(userActions.loadUser({ id: id }));
    });

    this.storeSubs = this.store.select('user').subscribe(({ user, loading, error }) => {
      this.user = user;
      this.loading = loading;
      this.error = error;
    })
  }

  ngOnDestroy(): void {
    this.routerSubs?.unsubscribe();
    this.storeSubs?.unsubscribe();
  }

}
