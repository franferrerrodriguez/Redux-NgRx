import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as actions from '../../counter/counter.actions';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  counter: number = 0;;

  constructor(private store: Store<AppState>) {
    this.store.select('counter').subscribe(counter => this.counter = counter);
  }

  ngOnInit(): void {
  }

  multiply() {
    this.store.dispatch(actions.multiply({ value: 2 }));
  }

  divide() {
    this.store.dispatch(actions.divide({ value: 2 }));
  }

}
