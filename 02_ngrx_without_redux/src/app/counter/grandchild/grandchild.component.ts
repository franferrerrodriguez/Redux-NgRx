import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styleUrls: ['./grandchild.component.css']
})
export class GrandchildComponent implements OnInit {

  @Input()
  counter: number = 0;
  
  @Output()
  counterOutput = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit(): void {
  }

  reset() {
    this.counter = 0;
    this.counterOutput.emit(this.counter);
  }

}
