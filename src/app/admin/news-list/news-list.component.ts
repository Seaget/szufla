import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { urlStr } from 'app/app.component';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  public news: Object;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://' + urlStr + '/backend.php?action=getNews').subscribe(news => {
      this.news = news;
    });
  }

  public removeNews(newsID) {
    this.http.post('http://' + urlStr + '/backend.php?action=deleteNews', JSON.stringify({
      id: newsID
    })).subscribe();
    location.reload();
  }
}
