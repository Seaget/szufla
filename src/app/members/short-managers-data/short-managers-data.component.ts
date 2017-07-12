import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-short-managers-data',
  templateUrl: './short-managers-data.component.html',
  styleUrls: ['./short-managers-data.component.css']
})
export class ShortManagersDataComponent implements OnInit {
  @Input() name:string;
  @Input() position:string;
  @Input() img_src:string;

  constructor() { }

  ngOnInit() {
  }

}
