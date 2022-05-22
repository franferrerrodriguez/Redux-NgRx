import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as filterActions from '../../filters/filter.actions';
import * as todoActions from '../../todos/todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  currentFilter: filterActions.validFilters = 'all';
  validFiltersArray: string[] = filterActions.validFiltersArray;
  pendingItems: number = 0;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('filter').subscribe(filter => {
      this.store.select('todos').subscribe(todos => {
        this.pendingItems = todos.filter(e => e.completed).length;
      })
      return this.currentFilter = filter;
    });
  }

  selectFilter(filter: filterActions.validFilters) {
    this.store.dispatch(filterActions.setFilter({ filter: filter }));
  }

  clearCompleted() {
    this.store.dispatch(todoActions.clearCompleted());
  }

}
