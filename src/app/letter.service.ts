import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root' // single shared instance throughout app
})
export class LetterService {
  private _currentValue$ = new BehaviorSubject('');
  public currentValue$ = this._currentValue$.asObservable();
  constructor() {}

  setCurrentValue(input: string) {
    this._currentValue$.next(input);
  }
}
