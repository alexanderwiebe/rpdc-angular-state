import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ParentFormComponent } from './components/parent/parent.component';
import { ChildFormComponent } from './components/child/child.component';
import { ParentComponent } from './containers/parent/parent.component';
import { ChildComponent } from './containers/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentFormComponent,
    ChildFormComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
