import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-outdoor-practice',
  templateUrl: './outdoor-practice.component.html',
  styleUrls: ['./outdoor-practice.component.css']
})
export class OutdoorPracticeComponent implements OnInit {

  title: string = 'UTC-field';
  lat: number = 46.237690;
  lng: number = 20.156918;
  zoom: number = 13;
  
  constructor() { }

  ngOnInit() {
  }

}
