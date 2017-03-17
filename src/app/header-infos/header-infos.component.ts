import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-infos',
  templateUrl: './header-infos.component.html',
  styleUrls: ['./header-infos.component.css']
})
export class HeaderInfosComponent implements OnInit {
  actDate : Date = new Date();

  constructor() { }

  ngOnInit() {
  }

}
