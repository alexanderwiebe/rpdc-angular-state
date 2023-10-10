import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { LetterService } from '../letter.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChildComponent implements OnInit {
  @Input() name: string;

  currentValue = '';
  constructor(private letterService: LetterService) {}

  ngOnInit() {
    this.letterService.currentValue$.subscribe((val) => {
      if (val !== this.currentValue) {
        this.currentValue = val;
      }
    });
  }

  push() {
    this.letterService.setCurrentValue(this.currentValue);
  }
}
