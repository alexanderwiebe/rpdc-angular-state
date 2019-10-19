import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChildComponent implements OnInit {
  currentValue = 0;
  constructor() {}

  ngOnInit() {}

  inc() {
    this.currentValue += 1;
  }

  dec() {
    this.currentValue -= 1;
  }
}
