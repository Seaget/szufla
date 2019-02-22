import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { urlStr } from 'app/app.component';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  playersData: Object;

  constructor(private http: HttpClient) {
    // Make the HTTP request:
    this.http.get('http://' + urlStr + '/backend.php?action=getPlayers').subscribe(playersData => {
      this.playersData = playersData;
    });
  }

  ngOnInit() {
  }
}
