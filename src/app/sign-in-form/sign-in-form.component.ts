import { Component, OnInit, ElementRef } from '@angular/core';
import { Http, URLSearchParams, RequestOptions, Headers } from '@angular/http';

@Component({
  selector: 'app-sign-in-form',
  host: {
      '(document:click)': 'handleClick($event)',
  },
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css']
})
export class SignInFormComponent implements OnInit {
  public elementRef;

  constructor(myElement: ElementRef, private http: Http) {
       this.elementRef = myElement;
  }

  ngOnInit() {
  }
  
  handleClick(event){
    let parentItemName = event.toElement.parentElement.nodeName;
    if(parentItemName == 'APP-SIGN-IN-FORM') {
      this.hideSignInPanel();
    }
  }

  public hideSignInPanel() {
    let item = document.getElementById("sign-in");
    item.style.display = 'none';
  }

  public loginProcess(username: string, password: string) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let params = {"action": 'loginProcess', 'username': username, "password": password};

    this.http.post('http://localhost/backend.php', params).subscribe(response => {
      if(JSON.parse(response['_body']) == 1) {
        localStorage.setItem('loggedUser', username);
        location.reload();
      }
    });

  }

}
