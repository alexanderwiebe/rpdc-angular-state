import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
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

  ngOnInit() {}

  update() {
    this.currentValue = this.letterService.getCurrentValue();
  }
  push() {
    this.letterService.setCurrentValue(this.currentValue);
  }
}
