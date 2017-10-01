import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../UserService'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private userService:UserService, private router: Router) { }

  public isAdmin: Boolean = this.userService.isAdmin();
  public userId: string   = this.userService.getUserId();

  ngOnInit() {
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/']);
  }
}
