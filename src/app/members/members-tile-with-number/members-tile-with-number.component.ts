import { Component, OnInit, Input } from '@angular/core';
import { MembersTileComponent } from '../members-tile/members-tile.component'

@Component({
  selector: 'app-members-tile-with-number',
  templateUrl: './members-tile-with-number.component.html',
  styleUrls: ['./members-tile-with-number.component.css']
})
export class MembersTileWithNumberComponent extends MembersTileComponent {
  @Input() number:number;
}
