import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';

  onActivate(e, outlet){
    outlet.scrollTop = 0;
  }
}


export var urlStr:string = "ultimateszeged.hu";
//export var urlStr:string = "localhost";