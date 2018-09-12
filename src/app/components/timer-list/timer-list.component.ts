import { Component, OnInit } from '@angular/core';
import { TimerService } from '../../services/timer.service';
import { TimerModel } from '../../models/timer.model';

import * as moment from 'moment';

@Component({
  selector: 'app-timer-list',
  providers: [TimerService],
  templateUrl: './timer-list.component.html',
  styleUrls: ['./timer-list.component.css']
})
export class TimerListComponent implements OnInit {

  constructor(private timerService: TimerService) { }

  private timerList: TimerModel[];
  ngOnInit() {
    // this.timerList = this.timerService.getTimers();
    this.timerList = [
      new TimerModel(1, "Teste 1", moment('00:10', 'mm:ss')),
      new TimerModel(2, "Teste 2", moment('00:20', 'mm:ss')),
      new TimerModel(3, "Teste 3", moment('00:30', 'mm:ss')),
      new TimerModel(4, "Teste 4", moment('00:40', 'mm:ss'))
    ]
  }

}
