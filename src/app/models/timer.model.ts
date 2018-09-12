import * as moment from 'moment';
import { EventEmitter } from '@angular/core';


export class TimerModel {

    private initalTime: moment.Moment;
    private interval = null;
    private paused: boolean = true;

    public looped = new EventEmitter<Object>();
    
    public id: number;
    constructor(public name: string, public time: moment.Moment) {
        this.initalTime = time.clone();
    }


    public start() {
        if (this.interval == null) {
            this.interval = this.initCountdown();
        }
        this.paused = false;
    }

    public pause() {
        this.paused = true;
    }

    public stop() {
        clearInterval(this.interval);
        this.time = this.initalTime;
        this.interval = null;
    }

    private initCountdown() {
        return setInterval(x => {
            if (!this.paused) {
                this.time.add(-1, 'second');
                //console.log(this.time.hours() + ":" + this.time.minutes() + ":" + this.time.seconds())
                if (this.time.hours() == 0 && this.time.minutes() == 0 && this.time.seconds() == 0) {
                    this.time = this.initalTime.clone();
                    this.looped.emit({});
                }
            }
        },
            1000
        );
    }
}