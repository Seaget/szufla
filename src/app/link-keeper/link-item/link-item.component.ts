import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-link-item',
  templateUrl: './link-item.component.html',
  styleUrls: ['./link-item.component.css']
})
export class LinkItemComponent implements OnInit {
  @Input() name:string;
  @Input() img_src:string;

  constructor() { }

  ngOnInit() {
  }

}
