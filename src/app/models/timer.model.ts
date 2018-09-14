import * as moment from 'moment';
import { EventEmitter } from '@angular/core';

import { PushNotificationsService } from '../services/push-notification.service';

export class TimerModel {

    private initalTime: moment.Moment;
    private interval = null;
    private paused: boolean = true;
    private hasLooped = false;
    private pushNotificationService: PushNotificationsService = new PushNotificationsService();

    get isPaused(): boolean {
        return this.paused;
    }

    public looped = new EventEmitter<Object>();


    public id: number;
    constructor(
        public name: string,
        public time: moment.Moment,
        public showsNotification: boolean) {

        this.initalTime = time.clone();
    }


    public start() {
        if (this.interval == null) {
            this.interval = this.initCountdown();
        }
        this.paused = false;
        ///this.hasLooped = false;
    }

    public pause() {
        this.paused = true;
    }

    public stop() {
        clearInterval(this.interval);
        this.time = this.initalTime.clone();
        this.paused = true;
        this.interval = null;
        this.hasLooped = false;
    }

    private initCountdown() {
        return setInterval(x => {
            if (!this.paused) {
                this.time.add(-1, 'second');

                if (this.hasLooped) {
                    this.hasLooped = false;
                    this.time = this.initalTime.clone();
                    this.onLoop();
                }

                if (this.time.hours() == 0 && this.time.minutes() == 0 && this.time.seconds() == 0) {
                    this.hasLooped = true;
                }
            }
        },
            1000
        );
    }

    public onLoop() {
        this.looped.emit({});

        var audio = new Audio();
        audio.src = "assets/looped.ogg";
        audio.load();
        audio.play();

        if (this.showsNotification) {
            this.pushNotificationService.create(this.name, { body: "Timer looped", silent: true });
        }
    }
}