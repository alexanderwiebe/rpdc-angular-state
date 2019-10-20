import {
  Component,
  OnInit,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  ChangeDetectionStrategy
} from '@angular/core';
import { LetterService } from '../../letter.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'app-parent'
  }
})
export class ParentComponent implements OnInit {
  parentValue = '';

  constructor(public letterService: LetterService) {}

  ngOnInit() {}

  push(incomingValue) {
    this.letterService.currentValue$.next(incomingValue);
  }
}
