import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LetterService } from '../letter.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'app-parent'
  }
})
export class ParentComponent implements OnInit {
  parentValue = '';

  constructor(private letterService: LetterService) {}

  ngOnInit() {
    this.letterService.currentValue$.subscribe((val) => {
      if (val !== this.parentValue) {
        this.parentValue = val;
      }
    });
  }

  push() {
    this.letterService.setCurrentValue(this.parentValue);
  }
}
