import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-managers',
  templateUrl: './managers.component.html',
  styleUrls: ['./managers.component.css']
})
export class ManagersComponent implements OnInit {
  managersData: Object;

  constructor(private http: HttpClient) {
    // Make the HTTP request:
    this.http.get('http://localhost/backend.php?action=getManagers').subscribe(managersData => {
      this.managersData = managersData;
    });
  }

  ngOnInit() {
  }

}
