import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { UserService } from '../UserService'

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent implements OnInit {

  constructor(private userService:UserService, private router: Router) { }

  ngOnInit() {
  }

  myfunc() {
      var a = $("#menu").toggle("fast");
  }

  actionLogin() {
    if(this.userService.isAuth())
      this.router.navigate(['/admin']);
    else
      this.router.navigate(['/login']);
  }
}
