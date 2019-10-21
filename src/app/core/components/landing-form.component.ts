import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from '@angular/core';
import { Unit } from '../models/units.model';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'landing-form',
  template: `
    <h1>Landing Page</h1>
    <ul>
      <li *ngFor="let unit of units">
        {{ unit.name }} aka: "{{ unit.abbreviation }}", id = {{ unit.id }}
      </li>
      <form [formGroup]="form">
        <label>unit name: </label>
        <input formControlName="name" />
        <label>unit abbreviation: </label>
        <input formControlName="abbreviation" />
        <label>unit id: </label>
        <input formControlName="id" />
        <button (click)="addUnit()">add</button>
      </form>
    </ul>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingFormComponent {
  @Input() units: Unit[];
  @Output() createUnit = new EventEmitter<any>();

  form = this.fb.group({
    name: [''],
    abbreviation: [''],
    id: ['']
  });

  constructor(private fb: FormBuilder) {}

  addUnit() {
    this.createUnit.emit(this.form.value);
    this.form.reset();
  }
}
