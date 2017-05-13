import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'login-page',
    templateUrl: 'login.html'
})
export class LoginPage implements OnInit {
    constructor() {
        console.log('login');
    }

    public ngOnInit() {
        console.log('init');
    }
}
