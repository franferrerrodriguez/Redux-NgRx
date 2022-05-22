import { Pipe, PipeTransform } from '@angular/core';
import { validFilters } from '../filters/filter.actions';
import { Todo } from './models/todo.model';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filter: validFilters): Todo[] {
    switch (filter) {
      case 'completed':
        return todos.filter(e => e.completed);
      case 'pending':
        return todos.filter(e => !e.completed);
      default:
        return todos;
    }
  }

}
