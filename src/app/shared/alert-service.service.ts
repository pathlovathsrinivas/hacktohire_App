import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable()
export class AlertService {

    private subject = new Subject<any>();

    constructor() { }

    alertThis(message: string, flag: string, siFn: () => void) {
        this.setAlert(message, flag, siFn);
    }

    setAlert(message: string, flag: string, siFn: () => void) {
        let that = this;
        this.subject.next({
            type: 'Alert',
            text: message,
            status: flag,
            siFn: function () {
                that.subject.next();
                siFn();
            }
        });
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}
