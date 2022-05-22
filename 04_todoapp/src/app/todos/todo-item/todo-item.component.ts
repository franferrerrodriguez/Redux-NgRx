import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from '../models/todo.model';
import * as todoActions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  todo: Todo;
  
  @ViewChild('inputEdit')
  txtEditER: ElementRef;
  
  checkCompleted: FormControl;
  txtEdit: FormControl;
  
  isEditing: boolean = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.checkCompleted = new FormControl(this.todo?.completed);
    this.txtEdit = new FormControl(this.todo?.text, Validators.required);

    this.checkCompleted.valueChanges.subscribe((value) => {
      this.store.dispatch(todoActions.edit({
        id: this.todo.id,
        text: this.todo.text,
        completed: value
      }));
    });
  }

  edit() {
    this.isEditing = true;
    setTimeout(() => {
      this.txtEditER?.nativeElement.focus();
    }, 1);
  }

  save() {
    this.isEditing = false;
    if (this.txtEdit.invalid) return;
    if (this.txtEdit.value === this.todo.text) return;
    this.store.dispatch(todoActions.edit({
      id: this.todo.id,
      text: this.txtEdit.value,
      completed: this.todo.completed,
    }));
  }

  remove() {
    this.store.dispatch(todoActions.remove({ id: this.todo.id }))
  }

}
