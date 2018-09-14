import { Injectable, EventEmitter } from '@angular/core';
import { TimerModel } from '../models/timer.model';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  private timerList: TimerModel[];
  constructor() {
    this.timerList = [];
  }

  public timerListUpdated = new EventEmitter<TimerModel[]>();

  public addTimer(model: TimerModel): void {
    model.id = this.timerList.length;
    this.timerList.push(model);

    this.timerListUpdated.emit(this.getTimers());
  }

  public removeTimer(id: number): void {
    
    var toDelete = this.timerList.filter(x => x.id == id);

    toDelete.forEach(x => {
      x.stop();
    });

    this.timerList = this.timerList.filter(x => x.id != id);
    this.timerListUpdated.emit(this.getTimers());
  }

  public getTimers(): TimerModel[] {
    return this.timerList.slice();
  }
}
