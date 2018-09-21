import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatCardModule, MatButtonModule, MatIconModule, MatGridListModule, MatFormFieldModule, MatDialogModule, MatInputModule, MatMenuModule, MatCheckboxModule, MatToolbarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { TimerListComponent } from './components/timer-list/timer-list.component';
import { TimerComponent } from './components/timer-list/timer/timer.component';
import { AddTimerComponent } from './components/timer-list/add-timer/add-timer.component';
import { TimerService } from './services/timer.service';
import { RemoveTimerComponent } from './components/timer-list/remove-timer/remove-timer.component';
import { NgxMaskModule } from 'ngx-mask'
import { PushNotificationsService } from './services/push-notification.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    TimerListComponent,
    TimerComponent,
    AddTimerComponent,
    RemoveTimerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatMenuModule,
    MatToolbarModule,
    MatCheckboxModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  entryComponents: [
    AddTimerComponent,
    RemoveTimerComponent
  ],
  providers: [TimerService, PushNotificationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
