import { Component, OnInit, Input } from '@angular/core';
import { TimerModel } from '../../../models/timer.model';
import { MatDialog } from '@angular/material/dialog';
import { TimerService } from 'src/app/services/timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  constructor(public dialog: MatDialog,
    public timerService: TimerService) { }

  @Input()
  public timer: TimerModel;

  ngOnInit() {
    this.timer.looped.subscribe(x => {
    });
  }

  onStart() {
    this.timer.start();
  }

  onStop() {
    this.timer.stop();
  }

  onPause() {
    this.timer.pause();
  }

  onDelete() {
    this.timerService.removeTimer(this.timer.id);
  }
}