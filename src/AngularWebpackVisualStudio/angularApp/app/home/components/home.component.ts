import { Component, OnInit } from '@angular/core';

import { ThingService } from './../../core/services/thing-data.service';
import { UserService } from './../../core/services/user-service';
import { Thing } from './../../models/thing';
import { User } from './../../models/user';

@Component({
    selector: 'app-home-component',
    templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {

    message: string;
    things: Thing[] = [];
    users: User[] = [];
    thing: Thing = new Thing();
    user: User = new User();
    value: any = new Date();
    isSignUp: boolean;

    constructor(private dataService: ThingService, private userService: UserService) {
      
            this.message = 'Please sign up here:';
       
    }

    ngOnInit() {
        
        if (localStorage.getItem('isSignUp') == "1")
           this.isSignUp = true;
        else
        this.isSignUp = false;

       
        this.getAllThings();
    }

    addUser() {
        
        this.userService
            .add(this.user)
            .subscribe(() => {
                this.getAllThings();
                this.user = new User();
                this.isSignUp = true;
                localStorage.setItem('isSignUp', '1');

            }, (error) => {
                console.log(error);
            });
    }

    deleteThing(thing: Thing) {
        this.dataService
            .delete(thing.id)
            .subscribe(() => {
                this.getAllThings();
            }, (error) => {
                console.log(error);
            });
    }

    private getAllThings() {
        this.userService
            .getAll()
            .subscribe(
            data => this.users = data,
            error => console.log(error),
            () => console.log('Get all complete')
            );
    }
}
