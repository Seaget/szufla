import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { urlStr } from 'app/app.component';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  public events: Object;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://' + urlStr + '/backend.php?action=getEvents').subscribe(events => {
      this.events = events;
    });
  }

  public removeEvent(eventID) {
    this.http.post('http://' + urlStr + '/backend.php?action=deleteEvent', JSON.stringify({
      id: eventID
    })).subscribe();
    location.reload();
  }
}
