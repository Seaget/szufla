import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';
import { Md5 } from 'ts-md5/dist/md5';
import { UserService } from '../../UserService';

@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.css']
})
export class UserEditorComponent implements OnInit {

  public userID: number;
  public userName: string = '';
  public userPassword: string = '';
  public userConfirmPassword: string = '';
  public userType: string = '';
  public userTypeString: string = '';

  constructor(private http: HttpClient, private route: ActivatedRoute, private userService:UserService) {}

  public isAdmin: Boolean = this.userService.isAdmin();

  ngOnInit() {
    this.route.params.subscribe(params => {
       this.userID = +params['userID'];

       if(this.userID == 0) {
         this.userID = null;
       }
    });

    if(this.userID != null) {
      this.http.get('http://localhost/backend.php?action=getUserById&id='+this.userID).subscribe(userData => {
        this.userName = userData[0].username;
        this.userType = userData[0].type;
        if(this.userType == "1") {
          this.userTypeString = "User";
        } else if(this.userType == "2") {
          this.userTypeString = "Admin";
        }
      });
    }
  }

  public saveUser() {
    $("#saveSuccess").hide(100);
    $("#saveWarning").hide(100);
    
    let pref = "szufla2011_";

    if(this.userTypeString == "User") {
      this.userType = "1";
    } else if(this.userTypeString == "Admin") {
      this.userType = "2";
    }

    if(this.userID == null && this.userName != "" && this.userType != "" && this.userPassword != "" && this.userConfirmPassword != "") {
      if(this.userPassword == this.userConfirmPassword) {
        this.http.post('http://localhost/backend.php?action=createUser', JSON.stringify({
          id: null, username: this.userName, password: Md5.hashStr(pref.concat(this.userPassword)), type: this.userType
        })).map(
          data => {
            $("#saveSuccess").show(100);
          },
          error => {
              console.log('save error');
          }
        ).subscribe();
      } else {
        $("#saveWarning").show(100);
      }
    } else if(this.userName != "" && this.userType != "" && this.userPassword == "" && this.userConfirmPassword == "") {
      this.http.post('http://localhost/backend.php?action=editUser', JSON.stringify({
        id: this.userID, username: this.userName, type: this.userType
      })).map(
        data => {
          $("#saveSuccess").show(100);
        },
        error => {
            console.log('update error');
        }).subscribe();
    } else if(this.userName != "" && this.userType != "" && this.userPassword != "" && this.userConfirmPassword != "") {
      if(this.userPassword == this.userConfirmPassword) {
        this.http.post('http://localhost/backend.php?action=editUser', JSON.stringify({
          id: this.userID, username: this.userName, password: Md5.hashStr(pref.concat(this.userPassword)), type: this.userType
        })).map(
          data => {
            $("#saveSuccess").show(100);
          },
          error => {
              console.log('update error');
          }).subscribe();
      } else {
        $("#passwordWarning").show(100);
      }
    } else {
      $("#saveWarning").show(100);
    }
  }

  public closeSaveDialog() {
    $("#saveSuccess").hide(100);
  }

  public closeWarningDialog() {
    $("#saveWarning").hide(100);
  }

  public closeWarningPasswordDialog() {
    $("#passwordWarning").hide(100);
  }

}
