import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indoor-practice',
  templateUrl: './indoor-practice.component.html',
  styleUrls: ['./indoor-practice.component.css']
})
export class IndoorPracticeComponent implements OnInit {

  title1: string = 'Etelka Sori Sportcsarnok';
  lat1: number = 46.2601161;
  lng1: number = 20.1718104;
  zoom: number = 13;

  title2: string = 'Piarista Gimnázium Sportcsarnok';
  lat2: number = 46.2693805;
  lng2: number = 20.140108;

  constructor() { }

  ngOnInit() {
  }

}
