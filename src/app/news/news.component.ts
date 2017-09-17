import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  public news: Object;
  
    constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost/backend.php?action=getNews').subscribe(news => {
      this.news = news;
    });
  }

}
