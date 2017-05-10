import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  myfunc() {
      var a = document.getElementById('menu');
      if(a.classList.contains('responsive')) {
          a.classList.remove('responsive');
      } else {
          a.classList.add('responsive');
      }
  }
}
