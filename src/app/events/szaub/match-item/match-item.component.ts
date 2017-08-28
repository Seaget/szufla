import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-match-item',
  templateUrl: './match-item.component.html',
  styleUrls: ['./match-item.component.css']
})
export class MatchItemComponent implements OnInit {
  @Input() month:string;
  @Input() day:number;
  @Input() time:string;
  @Input() location:string;
  @Input() home:string;
  @Input() foreign:string;
  @Input() result:string;
  
  constructor() { }

  ngOnInit() {
  }

}
