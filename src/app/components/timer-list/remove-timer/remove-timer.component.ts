import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TimerService } from '../../../services/timer.service';

@Component({
  selector: 'app-remove-timer',
  templateUrl: './remove-timer.component.html',
  styleUrls: ['./remove-timer.component.css']
})
export class RemoveTimerComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public id: number,
    public dialogRef: MatDialogRef<RemoveTimerComponent>,
    public timerService: TimerService) { }

  ngOnInit() {
  }

  onConfirm() {
    this.timerService.removeTimer(this.id);
  }
}
