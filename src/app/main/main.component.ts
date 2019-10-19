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

  reallyLongFunctionNameSoYouKnowIMeanBusiness1(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness2(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness3(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness4(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness5(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness6(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness7(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness8(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness9(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness10(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness11(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness12(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness13(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness14(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness15(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness16(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness17(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness18(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness19(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness20(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness21(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness22(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness23(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness24(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness25(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness26(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness27(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness28(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness29(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness30(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness31(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness32(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness33(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness34(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness35(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness36(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness37(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness38(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness39(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness40(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness41(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness42(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness43(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness44(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness45(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness46(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness47(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness48(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness49(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness50(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness51(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness52(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness53(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness54(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness55(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness56(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness57(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness58(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness59(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness60(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness61(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness62(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness63(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness64(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness65(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness66(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness67(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness68(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness69(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness70(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness71(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness72(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness73(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness74(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness75(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness76(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness77(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness78(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness79(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness80(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness81(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness82(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness83(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness84(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness85(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness86(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness87(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness88(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness89(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness90(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness91(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness92(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness93(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness94(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness95(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness96(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness97(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness98(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness99(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness100(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness101(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness102(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness103(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness104(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness105(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness106(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness107(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness108(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness109(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness110(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness111(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness112(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness113(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness114(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness115(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness116(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness117(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness118(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness119(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness120(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness121(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness122(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness123(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness124(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness125(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness126(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness127(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness128(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness129(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness130(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness131(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness132(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness133(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness134(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness135(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness136(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness137(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness138(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness139(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness140(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness141(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness142(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness143(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness144(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness145(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness146(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness147(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness148(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness149(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness150(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness151(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness152(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness153(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness154(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness155(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness156(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness157(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness158(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness159(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness160(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness161(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness162(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness163(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness164(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness165(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness166(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness167(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness168(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness169(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness170(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness171(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness172(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness173(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness174(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness175(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness176(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness177(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness178(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness179(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness180(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness181(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness182(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness183(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness184(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness185(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness186(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness187(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness188(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness189(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness190(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness191(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness192(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness193(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness194(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness195(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness196(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness197(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness198(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness199(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness200(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness201(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness202(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness203(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness204(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness205(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness206(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness207(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness208(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness209(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness210(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness211(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness212(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness213(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness214(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness215(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness216(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness217(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness218(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness219(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness220(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness221(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness222(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness223(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness224(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness225(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness226(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness227(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness228(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness229(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness230(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness231(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness232(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness233(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness234(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness235(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness236(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness237(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness238(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness239(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness240(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness241(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness242(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness243(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness244(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness245(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness246(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness247(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness248(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness249(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness250(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness251(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness252(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness253(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness254(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness255(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness256(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness257(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness258(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness259(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness260(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness261(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness262(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness263(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness264(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness265(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness266(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness267(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness268(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness269(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness270(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness271(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness272(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness273(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness274(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness275(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness276(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness277(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness278(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness279(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness280(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness281(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness282(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness283(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness284(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness285(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness286(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness287(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness288(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness289(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness290(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness291(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness292(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness293(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness294(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness295(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness296(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness297(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness298(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness299(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness300(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness301(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness302(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness303(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness304(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness305(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness306(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness307(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness308(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness309(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness310(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness311(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness312(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness313(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness314(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness315(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness316(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness317(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness318(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness319(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness320(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness321(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness322(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness323(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness324(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness325(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness326(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness327(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness328(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness329(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness330(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness331(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness332(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness333(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness334(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness335(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness336(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness337(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness338(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness339(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness340(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness341(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness342(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness343(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness344(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness345(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness346(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness347(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness348(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness349(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness350(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness351(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness352(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness353(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness354(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness355(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness356(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness357(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness358(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness359(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness360(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }
  reallyLongFunctionNameSoYouKnowIMeanBusiness361(also, check, out, how, many, params, i, can, pass, to, a, func, wow, that, is, lots){
    const blah = also + check;
    const searchConfig = this.configurationService;

    if (this.inputPattern.isRegExp) {
      this.inputPattern.pattern = this.inputPattern.pattern.replace(
        /\r?\n/g,
        '\\n'
      );
    }
    const blahTwo = {out, how, many, params};
    const newPattern = {
      ...this.inputPattern,
      wordSeparators: searchConfig.editor.wordSeparators
    };
    if (this.isCaseSensitive(this.inputPattern, this.options)) {
      newPattern.isCaseSensitive = true;
    }
    const blahThree = {i, can, pass};
    if (this.isMultiline(this.inputPattern)) {
      newPattern.isMultiline = true;
    }
    const blahFour = {to, a, func};
    const blahFive = {wow, that, is, lots};

    const superBlah = [blah, blahTwo, blahThree, blahFour, blahFive];
    console.log(superBlah);
  }

  title = 'app';
}
