import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IngressEgressComponent } from './ingress-egress.component';
import { DetailComponent } from './detail/detail.component';
import { MapTypePipe } from './map-type.pipe';
import { StoreModule } from '@ngrx/store';
import { ingressEgressReducer } from './ingress-egress.reducer';

@NgModule({
  declarations: [
    IngressEgressComponent,
    DetailComponent,
    MapTypePipe,
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('ingressEgress', ingressEgressReducer),
    ReactiveFormsModule
  ]
})
export class IngressEgressModule { }
