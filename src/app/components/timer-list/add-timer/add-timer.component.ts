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

  model: {
    name: string,
    time: string
    showsNotification: boolean
  }

  constructor(
    public dialogRef: MatDialogRef<AddTimerComponent>,
    public timerService: TimerService
  ) {
    this.model = {
      name: "",
      time: "",
      showsNotification: false
    }
  }

  onSubmit(): void {
    var timer = new TimerModel(this.model.name, moment(this.model.time, "hh:mm:ss"), this.model.showsNotification)
    this.timerService.addTimer(timer);

    this.dialogRef.close();
  }
}