import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { urlStr } from 'app/app.component';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  playersData: Object;

  constructor(private http: HttpClient) {
    // Make the HTTP request:
    this.http.get('http://' + urlStr + '/backend.php?action=getPassives').subscribe(playersData => {
      this.playersData = playersData;
    });
  }

  ngOnInit() {
  }

}
