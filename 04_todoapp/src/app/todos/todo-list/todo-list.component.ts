import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { validFilters } from 'src/app/filters/filter.actions';
import { Todo } from '../models/todo.model';
import * as todoActions from '../todo.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  checkAll: boolean = false;
  currentFilter: validFilters;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe(state => {
      this.todos = state.todos;
      this.currentFilter = state.filter;
    })
  }

  checkAllTodos() {
    this.checkAll = !this.checkAll;
    this.store.dispatch(todoActions.checkAll({ checkAll: this.checkAll }));
  }

}
