import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Unit } from '../models/units.model';

@Injectable({ providedIn: 'root' })
export class UnitsService {
  constructor() {}

  getUnits(): Observable<Unit[]> {
    return of([
      <Unit>{
        id: '1',
        name: 'meter',
        abbreviation: 'm'
      },
      <Unit>{
        id: '2',
        name: 'second',
        abbreviation: 's'
      },
      <Unit>{
        id: '3',
        name: 'candela',
        abbreviation: 'c'
      },
      <Unit>{
        id: '4',
        name: 'amp',
        abbreviation: 'a'
      },
      <Unit>{
        id: '5',
        name: 'gram',
        abbreviation: 'g'
      },
      <Unit>{
        id: '6',
        name: 'liter',
        abbreviation: 'l'
      }
    ]);
  }
}
