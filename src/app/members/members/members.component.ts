import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  playersData: Object;

  constructor(private http: HttpClient) {
    // Make the HTTP request:
    this.http.get('http://localhost/backend.php?action=getPassives').subscribe(playersData => {
      this.playersData = playersData;
    });
  }

  ngOnInit() {
  }

}
