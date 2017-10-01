import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { UserService } from '../UserService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username: string = ''
  public password: string = ''
  public display:  string = 'none';

  constructor(private userService:UserService, private router: Router) { }

  ngOnInit() {
  }

  doLogin() {
        this.userService.login(this.username, this.password)
            .subscribe(
                data => {
                    if(this.userService.isAuth())
                        this.router.navigate(['/admin']);
                    else {
                        this.display = 'block';
                        this.router.navigate(['/login']);
                    }
                },
                error => {
                    this.display = 'block';
                });
  }

  public closeWarningPasswordDialog() {
    this.display = 'none';
  }
}
