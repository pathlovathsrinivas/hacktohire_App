import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/shared/alert-service.service';

@Component({
selector: 'app-alert',
templateUrl: './alert.component.html',
styleUrls: ['./alert.component.css']
})

export class AlertComponent1 implements OnInit {
message: any;
constructor(private alertService: AlertService) { }
ngOnInit() {
this.alertService.getMessage().subscribe(message => {
this.message = message;
});
}
}
