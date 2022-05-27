import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/app.reducer';
import { AuthService } from 'src/app/services/auth.service';
import * as uiActions from '../../shared/ui.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit, OnDestroy {
  
  form: FormGroup;
  isLoading: boolean = false;
  uiSubs: Subscription;

  constructor(private formBuilder: FormBuilder, 
              private authService: AuthService,
              private router: Router,
              private store: Store<AppState>) { }
  
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required]
    });

    this.uiSubs = this.store.select('ui')
      .subscribe(ui => this.isLoading = ui.isLoading);
  }

  ngOnDestroy(): void {
    this.uiSubs.unsubscribe();
  }

  submit(): void {
    if (this.form.invalid) return;
    
    this.store.dispatch(uiActions.initLoading());

    const { email, password } = this.form.value;
    this.authService.loginUser(email, password)
      .then(() => {
        this.store.dispatch(uiActions.stopLoading());
        this.router.navigate(['/']);
      })
      .catch(err => {
        this.store.dispatch(uiActions.stopLoading());
        alert(err);
      });
  }

}
