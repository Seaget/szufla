import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { UserService } from '../../UserService';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  constructor(private userService:UserService, private router: Router) { }

  ngOnInit() {
  }

  myfunc() {
     $("#menu").toggle("fast");
  }

  actionLogin() {
    if(this.userService.isAuth())
      this.router.navigate(['/admin']);
    else
      this.router.navigate(['/login']);
  }
}
