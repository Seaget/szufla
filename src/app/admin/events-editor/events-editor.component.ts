import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-events-editor',
  templateUrl: './events-editor.component.html',
  styleUrls: ['./events-editor.component.css']
})
export class EventsEditorComponent implements OnInit {

  public eventID: number;
  public eventTitle: string = ''
  public eventLocation: string = ''
  public eventStart: Date;
  public eventEnd: Date;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
       this.eventID = +params['eventID'];

       if(this.eventID == 0) {
         this.eventID = null;
       }
    });

    if(this.eventID != null) {
      this.http.get('http://localhost/backend.php?action=getEventById&id='+this.eventID).subscribe(eventData => {
        this.eventTitle = eventData[0].title;
        this.eventLocation = eventData[0].location;
        this.eventStart = new Date(eventData[0].start);
        this.eventEnd = new Date(eventData[0].end);
      });
    }
  }

  public saveEvent() {
    $("#saveSuccess").hide(100);
    $("#saveWarning").hide(100);

    let tmpEventStart = new Date(new Date(this.eventStart).getTime() + (60*60*24*1000));
    let tmpEventEnd   = new Date(new Date(this.eventEnd).getTime() + (60*60*24*1000));

    if(this.eventID == null && this.eventTitle != "" && this.eventLocation != "" && this.eventStart != null && this.eventEnd != null) {
      this.http.post('http://localhost/backend.php?action=createEvent', JSON.stringify({
        id: null, title: this.eventTitle, location: this.eventLocation, start: tmpEventStart.toISOString().substring(0, 10), end: tmpEventEnd.toISOString().substring(0, 10)
      })).map(
        data => {
          console.log(data);
          $("#saveSuccess").show(100);
        },
        error => {
            console.log('update error');
        }).subscribe();
    } else if(this.eventTitle != "" && this.eventLocation != "" && this.eventStart != null && this.eventEnd != null) {
      this.http.post('http://localhost/backend.php?action=editEvent', JSON.stringify({
        id: this.eventID, title: this.eventTitle, location: this.eventLocation, start: tmpEventStart.toISOString().substring(0, 10), end: tmpEventEnd.toISOString().substring(0, 10)
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

  clearStartDate() {
    this.eventStart = null;
  }

  setStartToday() {
    this.eventStart = new Date();
  }

  clearEndDate() {
    this.eventEnd = null;
  }

  setEndToday() {
    this.eventEnd = new Date();
  }
}
