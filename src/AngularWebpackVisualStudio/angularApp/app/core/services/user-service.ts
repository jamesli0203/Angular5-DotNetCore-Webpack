import 'rxjs/add/operator/map';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Configuration } from './../../app.constants';

import { User } from './../../models/user'

@Injectable()
export class UserService {

    private actionUrl: string;
    private headers: HttpHeaders;

    constructor(private http: HttpClient, configuration: Configuration) {

        this.actionUrl = configuration.Server + 'api/users/';

        this.headers = new HttpHeaders();
        this.headers = this.headers.set('Content-Type', 'application/json');
        this.headers = this.headers.set('Accept', 'application/json');
    }

    getAll(): Observable<User[]> {
        return this.http.get<User[]>(this.actionUrl, { headers: this.headers });
    }

    getSingle(id: number): Observable<User> {
        return this.http.get<User>(this.actionUrl + id, { headers: this.headers });
    }

    add(UserToAdd: User): Observable<User> {
        const toAdd = JSON.stringify({
            Firstname: UserToAdd.firstname,
            Lastname: UserToAdd.lastname,
            Emailaddress: UserToAdd.emailaddress,
            Activity: UserToAdd.activity,
            Comments: UserToAdd.comments
        });
        console.log(toAdd);
        return this.http.post<User>(this.actionUrl, toAdd, { headers: this.headers });
    }

    update(id: number, itemToUpdate: any): Observable<User> {
        return this.http
            .put<User>(this.actionUrl + id, JSON.stringify(itemToUpdate), { headers: this.headers });
    }

    delete(id: number): Observable<any> {
        return this.http.delete<any>(this.actionUrl + id, { headers: this.headers });
    }
}
