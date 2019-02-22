import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-members-tile',
  templateUrl: './members-tile.component.html',
  styleUrls: ['./members-tile.component.css']
})
export class MembersTileComponent implements OnInit {
  @Input() name:string;
  @Input() position:string;
  @Input() img_src:string;

  constructor() { }

  ngOnInit() {
  }
}
