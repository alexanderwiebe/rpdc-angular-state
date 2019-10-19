import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  OnChanges,
  SimpleChange,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChildComponent implements OnInit, OnChanges {
  @Input() parentStartValue: number;

  currentValue = 0;
  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.parentStartValue && this.parentStartValue) {
      this.currentValue = this.parentStartValue;
    }
  }

  inc() {
    this.currentValue += 1;
  }

  dec() {
    this.currentValue -= 1;
  }
}
