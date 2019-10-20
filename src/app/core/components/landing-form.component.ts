import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Unit } from '../models/units.model';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'landing-form',
  template: `
    <h1>Landing Page</h1>
    <ul>
      <li *ngFor="let unit of units">{{ unit.name }}</li>
    </ul>
    <ul>
      <li *ngFor="let unit of rootUnits">{{ unit.name }}</li>
    </ul>
    <form [formGroup]="form">
      <label>unit name: </label>
      <input formControlName="name" />
      <label>unit initial: </label>
      <input formControlName="initial" />
      <button (click)="addUnit()">add</button>
    </form>
  `
})
export class LandingFormComponent {
  @Input() units: Unit[];
  @Input() rootUnits: Unit[];
  @Output() createUnit = new EventEmitter<any>();

  form = this.fb.group({
    name: [''],
    initial: ['']
  });

  constructor(private fb: FormBuilder) {}

  addUnit() {
    this.createUnit.emit(this.form.value);
  }
}
