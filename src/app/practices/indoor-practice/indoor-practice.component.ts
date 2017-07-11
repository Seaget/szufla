import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indoor-practice',
  templateUrl: './indoor-practice.component.html',
  styleUrls: ['./indoor-practice.component.css']
})
export class IndoorPracticeComponent implements OnInit {

  title: string = 'Gellért - Csarnok';
  lat: number = 46.234056;
  lng: number = 20.173423;
  zoom: number = 13;

  constructor() { }

  ngOnInit() {
  }

}
