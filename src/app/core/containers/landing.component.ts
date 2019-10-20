import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Unit } from '../models/units.model';
import { LoadUnits, CreateUnits } from '../../store/actions';
import { getUnits } from '../../store/selectors/units.selector';

@Component({
  selector: 'landing',
  template: `
    <landing-form
      [units]="units$ | async"
      [rootUnits]="rootUnits$ | async"
      (createUnit)="onCreate($event)"
    ></landing-form>
  `
})
export class LandingComponent implements OnInit {
  units$: Observable<Unit[]>;
  rootUnits$: Observable<Unit[]>;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.store.dispatch(new LoadUnits());
    this.rootUnits$ = this.store.pipe(select(getUnits));
  }

  onCreate(newUnit) {
    this.store.dispatch(new CreateUnits(newUnit));
  }
}
