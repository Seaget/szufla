import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public users: Object;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost/backend.php?action=getUsers').subscribe(users => {
      this.users = users;
    });
  }

  public removeUser(userID) {
    this.http.post('http://localhost/backend.php?action=deleteUser', JSON.stringify({
      id: userID
    })).subscribe();
    location.reload();
  }
}
