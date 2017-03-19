import { Component, OnInit, ElementRef } from '@angular/core';

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

  constructor(myElement: ElementRef) {
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

}
