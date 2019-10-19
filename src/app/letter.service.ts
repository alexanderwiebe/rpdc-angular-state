import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root' // single shared instance throughout app
})
export class LetterService {
  public currentValue$ = new BehaviorSubject('');
  constructor() {}
}
