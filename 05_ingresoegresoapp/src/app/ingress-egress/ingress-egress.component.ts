import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/app.reducer';
import { IngressEgress } from 'src/app/models/ingress-egress.model';
import { User } from 'src/app/models/user.model';
import { IngressEgressService } from 'src/app/services/ingress-egress.service';

@Component({
  selector: 'app-ingress-egress',
  templateUrl: './ingress-egress.component.html',
  styleUrls: ['./ingress-egress.component.css']
})
export class IngressEgressComponent implements OnInit, OnDestroy {

  userSubs: Subscription;
  user?: User;
  form: FormGroup;
  type: string = 'ingress';

  constructor(private fb: FormBuilder,
              private ingressEgressService: IngressEgressService,
              private store: Store<AppState>) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      description: ['', Validators.required],
      amount: ['', Validators.required]
    });
    
    this.userSubs = this.store.select('user')
      .subscribe(state => this.user = state.user);
  }

  ngOnDestroy(): void {
    this.userSubs.unsubscribe();
  }

  submit(): void {
    this.ingressEgressService.createIngressEgress(this.user?.uid, {...this.form.value, type: this.type})
      .then(() => {
        this.form.reset();
        alert(`Elemento de tipo '${ this.type }' insertado correctamente.`);
      })
      .catch(() => alert('Ha ocurrido un error.'));
  }

}
