import { Injectable, EventEmitter } from '@angular/core';
import { TimerModel } from '../models/timer.model';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  private timerList: TimerModel[];
  constructor() {

    this.timerList = this.getLocalStorageTimers();

  }

  public timerListUpdated = new EventEmitter<TimerModel[]>();

  public addTimer(model: TimerModel): void {

    model.id = this.timerList.length;
    this.timerList.push(model);

    this.updateLocalStorageTimers();

    this.timerListUpdated.emit(this.getTimers());
  }

  public removeTimer(id: number): void {

    var toDelete = this.timerList.filter(x => x.id == id);

    toDelete.forEach(x => {
      x.stop();
    });

    this.timerList = this.timerList.filter(x => x.id != id);

    this.updateLocalStorageTimers();

    this.timerListUpdated.emit(this.getTimers());

  }

  public getTimers(): TimerModel[] {
    return this.timerList.slice();
  }

  private updateLocalStorageTimers(): void {
    var timersJson = JSON.stringify(this.getTimers());
    localStorage.setItem('timers', timersJson);
  }

  private getLocalStorageTimers(): TimerModel[] {
    var stored = JSON.parse(localStorage.getItem('timers'));
    
    var ret = [];
    if (stored) {
      stored.forEach(x => {
        ret.push(new TimerModel(x.name, moment(x.time), x.showsNotification, x.id));
      });
    }

    return ret;
  }
}
