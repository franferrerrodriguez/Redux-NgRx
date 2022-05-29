import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { ListComponent } from './users/list/list.component';
import { DetailComponent } from './users/detail/detail.component';

const routes: Routes = [
  { path: 'home', component: ListComponent },
  { path: 'user/:id', component: DetailComponent },
  { path: '**', redirectTo: 'home' }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
