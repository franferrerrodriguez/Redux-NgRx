import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input()
  counter: number = 0;

  @Output()
  counterOutput = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  multiply() {
    this.counter *= 2;
    this.counterOutput.emit(this.counter);
  }

  divide() {
    this.counter /= 2;
    this.counterOutput.emit(this.counter);
  }

  captureCounterOutput($event: number) {
    this.counter = $event;
    this.counterOutput.emit(this.counter);
  }

}
