import { Component, OnInit, ViewEncapsulation } from '@angular/core';

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
  startValue = 0;
  parentValue = 0;

  constructor() {}

  ngOnInit() {}
}
