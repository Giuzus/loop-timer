import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class PushNotificationsService {

  public permission: Permission;

  constructor() {
    this.permission = this.isSupported() ? 'default' : 'denied';
  }

  public isSupported(): boolean {
    return 'Notification' in window;
  }

  requestPermission(): void {
    let self = this;
    if (this.isSupported()) {
      Notification.requestPermission(function (status) {
        return self.permission = status;
      });
    }
  }

  create(title: string, options?: PushNotificationOptions): any {
    let self = this;
    if (!this.isSupported()) {
      console.log('Notifications are not available in this environment');
    }
    if (self.permission !== 'granted') {
      console.log("The user hasn't granted you permission to send push notifications");
    }

    new Notification(title, options);
  }
}

export declare type Permission = 'denied' | 'granted' | 'default';
export interface PushNotificationOptions {
  body?: string;
  icon?: string;
  tag?: string;
  data?: any;
  renotify?: boolean;
  silent?: boolean;
  sound?: string;
  noscreen?: boolean;
  sticky?: boolean;
  dir?: 'auto' | 'ltr' | 'rtl';
  lang?: string;
  vibrate?: number[];
}  