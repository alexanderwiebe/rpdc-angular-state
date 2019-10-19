import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // single shared instance throughout app
})
export class LetterService {
  currentValue: string;
  constructor() {}

  setCurrentValue(newCurrentValue: string) {
    this.currentValue = newCurrentValue;
  }

  getCurrentValue(): string {
    return this.currentValue;
  }
}
