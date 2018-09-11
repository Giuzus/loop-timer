import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material';

import { AppComponent } from './app.component';
import { TimerListComponent } from './components/timer-list/timer-list.component';
import { TimerComponent } from './components/timer-list/timer/timer.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerListComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
