import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { TimerModel } from '../../../models/timer.model';
import * as moment from 'moment';
import { TimerService } from '../../../services/timer.service';


@Component({
  selector: 'app-add-timer',
  templateUrl: './add-timer.component.html',
  styleUrls: ['./add-timer.component.css']
})
export class AddTimerComponent {

  constructor(
    public dialogRef: MatDialogRef<AddTimerComponent>,
    public timerService: TimerService
  ) { }

  name: string;
  time: string;

  onConfirm(): void {
    var timer = new TimerModel(this.name, moment(this.time, "hh:mm:ss"))
    this.timerService.addTimer(timer);
  }
}