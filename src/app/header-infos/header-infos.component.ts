import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-infos',
  templateUrl: './header-infos.component.html',
  styleUrls: ['./header-infos.component.css']
})
export class HeaderInfosComponent implements OnInit {
  actDate : Date = new Date();
  public loggedUser:boolean = false;

  constructor() { }

  ngOnInit() {
    if(localStorage.getItem('loggedUser')) {
      this.loggedUser = true;
    } else {
      this.loggedUser = false;
    }
  }

  public showSignInPanel() {
    let item = document.getElementById("sign-in");
    item.style.display = 'block';
  }

  public showUserPanel() {
    localStorage.removeItem('loggedUser');
    location.reload();
  }

}
