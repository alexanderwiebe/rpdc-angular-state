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
  selector: 'app-parent-form',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'app-parent'
  }
})
export class ParentFormComponent implements OnInit {
  @Input() stream: string;
  @Output() update = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  push(event) {
    this.update.emit(event);
  }
}
