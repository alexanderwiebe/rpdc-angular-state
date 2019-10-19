import {
  Component,
  OnInit,
  OnChanges,
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  OnDestroy,
  SimpleChanges
} from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
  implements
    OnInit,
    OnChanges,
    AfterContentChecked,
    AfterContentInit,
    AfterViewInit,
    OnDestroy {
  configurationService: any;
  inputPattern: any;

  form = this.fb.group({
    name: ['']
  });

  constructor(fb: FormBuilder) {}

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
