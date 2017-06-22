import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-short-members-data',
  templateUrl: './short-members-data.component.html',
  styleUrls: ['./short-members-data.component.css']
})
export class ShortMembersDataComponent implements OnInit {
  @Input() name:string;
  @Input() number:number;
  @Input() position:string;
  @Input() img_src:string;

  constructor() { }

  ngOnInit() {
  }

}
