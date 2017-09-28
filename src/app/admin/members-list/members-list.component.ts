import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.css']
})
export class MembersListComponent implements OnInit {

  public members: Object;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost/backend.php?action=getMembers').subscribe(members => {
      this.members = members;
    });
  }

  public removeMember(membersID) {
    this.http.post('http://localhost/backend.php?action=deleteMember', JSON.stringify({
      id: membersID
    })).subscribe();
    location.reload();
  }
}
