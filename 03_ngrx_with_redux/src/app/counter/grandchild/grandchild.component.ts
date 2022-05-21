import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { reset } from '../../counter/counter.actions';

@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styleUrls: ['./grandchild.component.css']
})
export class GrandchildComponent implements OnInit {
  counter: number = 0;
  
  constructor(private store: Store<AppState>) {
    store.select('counter').subscribe(counter => this.counter = counter);
  }

  ngOnInit(): void {
  }

  reset() {
    this.store.dispatch(reset());
  }

}
