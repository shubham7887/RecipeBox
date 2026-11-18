import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from "../../services/alert.service";


@Component({ selector: 'alert', templateUrl: 'alert.component.html' })
export class AlertComponent implements OnInit, OnDestroy {
    private subscription!: Subscription;
    message: any;

    constructor(private alertService: AlertService) { }

    ngOnInit() {
        this.subscription = this.alertService.getAlert()
            .subscribe(message => {
                debugger
                switch (message && message.type) {
                    case 'success':
                        // message.cssClass = 'alert alert-success';
                        message.cssClass = 'alert show customize-alert fs-5 alert-success fade';
                        break;
                    case 'error':
                        // message.cssClass = 'alert alert-danger';
                        message.cssClass = 'alert show customize-alert fs-5 alert-danger fade';
                        break;
                }

                this.message = message;
            });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}