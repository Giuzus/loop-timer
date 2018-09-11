import { Injectable } from '@angular/core';
import { TimerModel } from '../models/timer.model';
import { timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  constructor() { }

  private timerList: TimerModel[];

  public addTimer(model: TimerModel): void {
    model.id = this.timerList.length;
    this.timerList.push(model);
  }

  public removeTimer(id: number): void {
    this.timerList = this.timerList.filter(x => {
      x.id != id;
    });
  }

  public getTimers(): TimerModel[] {
    return this.timerList.slice();
  }
}
