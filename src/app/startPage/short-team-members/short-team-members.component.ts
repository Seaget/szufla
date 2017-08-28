import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-short-team-members',
  templateUrl: './short-team-members.component.html',
  styleUrls: ['./short-team-members.component.css']
})
export class ShortTeamMembersComponent implements OnInit {
  playersData: Object;

  constructor(private http: HttpClient) {
    // Make the HTTP request:
    this.http.get('http://localhost/backend.php?action=getPlayers&limit=4').subscribe(playersData => {
      this.playersData = playersData;
    });
  }

  ngOnInit() {
  }

}
