import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/app.reducer';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  userSubs: Subscription;
  user?: User;

  constructor(private store: Store<AppState>,
              private authService: AuthService,) { }

  ngOnInit(): void {
    this.userSubs = this.store.select('user')
      .subscribe(state => this.user = state.user);
  }

  ngOnDestroy(): void {
    this.userSubs.unsubscribe();
  }

}
