import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable()
export class UserService {
    constructor(private http: Http) { }

    isAuth() {
        return localStorage.getItem('loggedUser') == "true";
    }

    login(username: string, password: string) {
        let pref = "szufla2011_";
        return this.http.post('http://localhost/backend.php?action=doLogin', JSON.stringify({ username: username, password: Md5.hashStr(pref.concat(password)) }))
            .map((response: Response) => {
                let user = response.json();
                if (user && user.id > 0) {
                    localStorage.setItem('loggedUser', "true");
                    localStorage.setItem('loggedUserType', user.type);
                    localStorage.setItem('loggedUserId', user.id);
                }
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('loggedUser');
        localStorage.removeItem('loggedUserType');
        localStorage.removeItem('loggedUserId');
    }

    isAdmin() {
        return (localStorage.getItem('loggedUserType') == "2");
    }

    getUserId() {
        return localStorage.getItem('loggedUserId');
    }
}