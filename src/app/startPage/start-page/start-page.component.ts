import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  myfunc() {
      var a = document.getElementById('menu');
      if(a.classList.contains('responsive')) {
          a.classList.remove('responsive');
      } else {
          a.classList.add('responsive');
      }
  }

}
