import {
  Component,
  OnInit,
  OnChanges,
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  OnDestroy,
  SimpleChanges,
  ChangeDetectorRef
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent
  implements
    OnInit,
    OnChanges,
    AfterContentChecked,
    AfterContentInit,
    AfterViewInit,
    OnDestroy {
  fb: FormBuilder;
  configurationService: any;
  inputPattern: any;
  cdr: ChangeDetectorRef;

  profileForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    })
  });

  constructor(fb: FormBuilder, cdr: ChangeDetectorRef) {
    this.fb = fb;
    this.cdr = cdr;
  }

  ngOnInit(): void {
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    this.cdr;
  }
  options(inputPattern: any, options: any) {
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: { blerg: 'blah' }
    };

    const searchConfig = this.configurationService;

    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
  }
  ngAfterContentChecked(): void {
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
  }
  ngAfterContentInit(): void {
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
  }
  ngAfterViewInit(): void {
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  isCaseSensitive(x, y) {
    return true;
  }

  isMultiline(x) {
    return {
      some: 'obj',
      type: 'words',
      adding: () => 'lines',
      etc: 'etc'
    };
  }

  title = 'app';
}
