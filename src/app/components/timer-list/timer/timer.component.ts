import { Component, OnInit, Input } from '@angular/core';
import { TimerModel } from '../../../models/timer.model';
import { MatDialog } from '@angular/material';
import { RemoveTimerComponent } from '../remove-timer/remove-timer.component';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  @Input()
  public timer: TimerModel;

  ngOnInit() {
    this.timer.looped.subscribe(x => {
      var audio = new Audio();
      audio.src = "/src/assets/looped.ogg";
      audio.load();
      audio.play();
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
    const dialogRef = this.dialog.open(RemoveTimerComponent, {
      width: '250px'
    });
  }
}