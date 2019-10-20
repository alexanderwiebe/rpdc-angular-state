import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'app-child-form',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildFormComponent implements OnInit {
  @Input() name: string;
  @Input() stream: string;
  @Output() update = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  push(event) {
    this.update.emit(event);
  }
}
