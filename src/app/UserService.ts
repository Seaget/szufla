import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Md5 } from 'ts-md5/dist/md5';
import { urlStr } from 'app/app.component';

@Injectable()
export class UserService {
    constructor(private http: Http) { }

    isAuth() {
        return localStorage.getItem('loggedUser') == "true";
    }

    login(username: string, password: string) {
        let pref = "szufla2011_";
        return this.http.post('http://' + urlStr + '/backend.php?action=doLogin', JSON.stringify({ username: username, password: Md5.hashStr(pref.concat(password)) }))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user == true) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('loggedUser', JSON.stringify(user));
                }
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('loggedUser');
    }
}