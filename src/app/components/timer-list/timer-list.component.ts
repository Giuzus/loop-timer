import { Component, OnInit } from '@angular/core';
import { TimerService } from '../../services/timer.service';
import { TimerModel } from '../../models/timer.model';

import * as moment from 'moment';
import { MatDialog } from '@angular/material';
import { AddTimerComponent } from './add-timer/add-timer.component';
import { PushNotificationsService } from '../../services/push-notification.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-timer-list',
  providers: [],
  templateUrl: './timer-list.component.html',
  styleUrls: ['./timer-list.component.css']
})
export class TimerListComponent implements OnInit {

  constructor(
    private timerService: TimerService,
    public pushNotificationService: PushNotificationsService,
    public dialog: MatDialog) { }

  public timerList: TimerModel[];
  ngOnInit() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./service-worker.js');
    }

    this.pushNotificationService.requestPermission();

    this.timerList = this.timerService.getTimers();

    this.timerService.timerListUpdated.subscribe(x => {

      this.timerList = x;
    });


  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddTimerComponent, {
      width: '250px'
    });
  }

  onStartAll() {
    this.timerList.forEach(timer => {
      timer.start();
    });
  }

  onPauseAll() {
    this.timerList.forEach(timer => {
      timer.pause();
    });
  }

  onStopAll() {
    this.timerList.forEach(timer => {
      timer.stop();
    });
  }
}
