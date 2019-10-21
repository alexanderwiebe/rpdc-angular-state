import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Unit } from '../models/units.model';
import { LoadUnits, CreateUnits } from '../../store/actions';
import { getUnits, getAllUnit } from '../../store/selectors/units.selector';

@Component({
  selector: 'landing',
  template: `
    <landing-form
      [units]="units$ | async"
      (createUnit)="onCreate($event)"
    ></landing-form>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingComponent implements OnInit {
  units$: Observable<Unit[]>;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.store.dispatch(new LoadUnits());
    this.units$ = this.store.pipe(select(getAllUnit));
  }

  onCreate(newUnit) {
    this.store.dispatch(new CreateUnits(newUnit));
  }
}
