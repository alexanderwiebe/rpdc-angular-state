import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';
import { LetterService } from '../../letter.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {
  @Input() name: string;
  constructor(public letterService: LetterService) {}

  ngOnInit() {}

  push(incomingValue) {
    this.letterService.currentValue$.next(incomingValue);
  }
}
