import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { urlStr } from 'app/app.component';

@Component({
  selector: 'app-admins-list',
  templateUrl: './admins-list.component.html',
  styleUrls: ['./admins-list.component.css']
})
export class AdminsListComponent implements OnInit {

  public admins: Object;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://' + urlStr + '/backend.php?action=getAdmins').subscribe(admins => {
      this.admins = admins;
    });
  }

  public removeAdmin(adminID) {
    this.http.post('http://' + urlStr + '/backend.php?action=deleteAdmin', JSON.stringify({
      id: adminID
    })).subscribe();
    location.reload();
  }
}
