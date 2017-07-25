import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  myfunc() {
      var a = $("#menu").toggle("fast");
  }

}
