import { Component, OnInit } from '@angular/core';
import { TimerService } from '../../services/timer.service';
import { TimerModel } from '../../models/timer.model';

import { MatDialog } from '@angular/material/dialog';
import { AddTimerComponent } from './add-timer/add-timer.component';

@Component({
  selector: 'app-timer-list',
  providers: [],
  templateUrl: './timer-list.component.html',
  styleUrls: ['./timer-list.component.css']
})
export class TimerListComponent implements OnInit {

  constructor(
    private timerService: TimerService,
    public dialog: MatDialog) { }

  public timerList: TimerModel[];
  ngOnInit() {
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
