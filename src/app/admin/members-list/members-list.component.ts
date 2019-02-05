import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { urlStr } from 'app/app.component';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.css']
})
export class MembersListComponent implements OnInit {

  public members: Object;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://' + urlStr + '/backend.php?action=getMembers').subscribe(members => {
      this.members = members;
    });
  }

  public removeMember(membersID) {
    this.http.post('http://' + urlStr + '/backend.php?action=deleteMember', JSON.stringify({
      id: membersID
    })).subscribe();
    location.reload();
  }
}
