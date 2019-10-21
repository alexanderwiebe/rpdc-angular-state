import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingFormComponent } from './core/components';
import { LandingComponent } from './core/containers';
import { effects } from './store/effects';
import { reducers } from './store/reducers';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument(),
    AppRoutingModule
  ],
  declarations: [AppComponent, LandingComponent, LandingFormComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
