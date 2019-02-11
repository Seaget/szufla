import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';
import { urlStr } from 'app/app.component';

@Component({
  selector: 'app-admins-editor',
  templateUrl: './admins-editor.component.html',
  styleUrls: ['./admins-editor.component.css']
})
export class AdminsEditorComponent implements OnInit {

  public adminID: number;
  public adminName: string = ''
  public adminUserName: string = ''
  public adminPwd: string = ''
  public adminPwdCheck: string = ''

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
       this.adminID = +params['adminID'];

       if(this.adminID == 0) {
         this.adminID = null;
       }
    });

    if(this.adminID != null) {
      this.http.get('http://' + urlStr + '/backend.php?action=getAdminById&id='+this.adminID).subscribe(adminData => {
        this.adminName = adminData[0].fullname;
        this.adminUserName = adminData[0].username;
      });
    }
  }

  public saveAdmin() {
    $("#saveSuccess").hide(100);
    $("#saveWarning").hide(100);

    if(this.adminID == null && this.adminName != "") {
      this.http.post('http://' + urlStr + '/backend.php?action=createAdmin', JSON.stringify({
        id: null, fullname: this.adminName, userName: this.adminUserName, pwd: this.adminPwd
      })).map(
        data => {
          $("#saveSuccess").show(100);
        },
        error => {
            console.log('update error');
        }).subscribe();
    } else if(this.adminName != "") {
      this.http.post('http://' + urlStr + '/backend.php?action=editAdmin', JSON.stringify({
        id: this.adminID, fullname: this.adminName, userName: this.adminUserName, pwd: this.adminPwd
      })).map(
        data => {
          $("#saveSuccess").show(100);
        },
        error => {
            console.log('update error');
        }).subscribe();
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
}
