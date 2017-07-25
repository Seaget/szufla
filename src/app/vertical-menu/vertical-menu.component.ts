import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-vertical-menu',
  templateUrl: './vertical-menu.component.html',
  styleUrls: ['./vertical-menu.component.css']
})
export class VerticalMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  hideMenu() {
    var a = $("#menu").hide();
  }

}
