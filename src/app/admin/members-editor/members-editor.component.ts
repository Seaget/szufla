import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';
import { DatepickerOptions } from 'ng2-datepicker';

@Component({
  selector: 'app-members-editor',
  templateUrl: './members-editor.component.html',
  styleUrls: ['./members-editor.component.css']
})
export class MembersEditorComponent implements OnInit {

  public memberID: number;
  public memberName: string = ''
  public memberNumber: number = 0
  public memberPosition: string = ''
  public memberProfileImage: string = 'assets/images/noImage.jpg'
  public memberWeight: number = 0
  public memberHeight: number = 0
  public memberNationality: string = ''
  public memberDateOfBirth: Date;
  public memberManagement: string = ''
  public memberActivity: string = ''

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
       this.memberID = +params['memberID'];

       if(this.memberID == 0) {
         this.memberID = null;
       }
    });

    if(this.memberID != null) {
      this.http.get('http://localhost/backend.php?action=getMemberById&id='+this.memberID).subscribe(memberData => {
        this.memberName = memberData[0].name;
        this.memberNumber = memberData[0].number;
        this.memberPosition = memberData[0].position;
        this.memberProfileImage = memberData[0].profilePicName;
        this.memberWeight = memberData[0].weight;
        this.memberHeight = memberData[0].height;
        this.memberNationality = memberData[0].nationality;
        
        if(memberData[0].dateofbirth != null)
          this.memberDateOfBirth = new Date(memberData[0].dateofbirth);
        else
          this.memberDateOfBirth = null;
        
        this.memberManagement = memberData[0].management;
        this.memberActivity = memberData[0].active;

        if(this.memberDateOfBirth == null) {
          let obj: HTMLInputElement = <HTMLInputElement>($("#birthDayComp :input")[0]);
          obj.value = "";
        }
      });
    }
  }

  public saveMember() {
    $("#saveSuccess").hide(100);
    $("#saveWarning").hide(100);

    let tmpDateOfBirth = null; 
    if(this.memberDateOfBirth != null) {
      tmpDateOfBirth = new Date(new Date(this.memberDateOfBirth).getTime() + (60*60*24*1000));
    }

    if(this.memberID == null && this.memberName != "") {
      this.http.post('http://localhost/backend.php?action=createMember', JSON.stringify({
        id: null, name: this.memberName, profilePicName: this.memberProfileImage, number: this.memberNumber, position: this.memberPosition,
        weight: this.memberWeight, height: this.memberHeight, nationality: this.memberNationality, 
        dateofbirth: tmpDateOfBirth == null ? null : tmpDateOfBirth.toISOString().substring(0, 10),
        management: this.memberManagement, active: this.memberActivity
      })).map(
        data => {
          $("#saveSuccess").show(100);
        },
        error => {
            console.log('update error');
        }).subscribe();
    } else if(this.memberName != "") {
      this.http.post('http://localhost/backend.php?action=editMember', JSON.stringify({
        id: this.memberID, name: this.memberName, profilePicName: this.memberProfileImage, number: this.memberNumber, position: this.memberPosition,
        weight: this.memberWeight, height: this.memberHeight, nationality: this.memberNationality, 
        dateofbirth: tmpDateOfBirth == null ? null : tmpDateOfBirth.toISOString().substring(0, 10),
        management: this.memberManagement, active: this.memberActivity
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

  fileChange(event) {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
        let file: File = fileList[0];
        let formData:FormData = new FormData();
        formData.append('fileToUpload', file, file.name);
        let headers = new Headers();
        /** No need to include Content-Type in Angular 4 */
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        this.http.post(`http://localhost/backend.php?action=uploadImage&type=member`, formData)
            .subscribe(
                data => { 
                  console.log('upload success');
                  console.log(data);
                  console.log(data['link']);
                  this.memberProfileImage = data['link'];
                },
                error => console.log(error)
            )
    }
  }

  public closeSaveDialog() {
    $("#saveSuccess").hide(100);
  }

  public closeWarningDialog() {
    $("#saveWarning").hide(100);
  }

  options: DatepickerOptions = {
    minYear: 1950,
    maxYear: 2030,
    displayFormat: 'YYYY-MM-DD',
    barTitleFormat: 'MMMM YYYY',
    firstCalendarDay: 0 // 0 - Sunday, 1 - Monday
  };

  clearBirthDate() {
    this.memberDateOfBirth = null;
    let obj: HTMLInputElement = <HTMLInputElement>($("#birthDayComp :input")[0]);
    obj.value = "";
  }
}
