import { Component, OnInit } from '@angular/core';
import { TimerService } from '../../services/timer.service';
import { TimerModel } from '../../models/timer.model';

import * as moment from 'moment';
import { MatDialog } from '@angular/material';
import { AddTimerComponent } from './add-timer/add-timer.component';

@Component({
  selector: 'app-timer-list',
  providers: [],
  templateUrl: './timer-list.component.html',
  styleUrls: ['./timer-list.component.css']
})
export class TimerListComponent implements OnInit {

  constructor(private timerService: TimerService, public dialog: MatDialog) { }

  public timerList: TimerModel[];
  ngOnInit() {

    this.timerService.timerListUpdated.subscribe(x => {
      this.timerList = x;
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddTimerComponent, {
      width: '250px'
    });
  }
}
