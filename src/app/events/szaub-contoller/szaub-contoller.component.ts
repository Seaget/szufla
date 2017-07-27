import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-szaub-contoller',
  templateUrl: './szaub-contoller.component.html',
  styleUrls: ['./szaub-contoller.component.css']
})
export class SzaubContollerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.menu .item').tab();
  }

}
