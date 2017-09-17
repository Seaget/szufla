import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-short-news',
  templateUrl: './short-news.component.html',
  styleUrls: ['./short-news.component.css']
})
export class ShortNewsComponent implements OnInit {
  newsData1: Object;
  newsData2: Object;

  constructor(private http: HttpClient) {
    this.newsData1 = {date: '', title: '', cover: '', description:''};
    this.newsData2 = {date: '', title: '', cover: '', description:''};

    // Make the HTTP request:
    this.http.get('http://localhost/backend.php?action=getNews').subscribe(newsData => {
      if(newsData[0] != null) this.newsData1 = newsData[0];
      if(newsData[1] != null) this.newsData2 = newsData[1];
    });
  }

  ngOnInit() {
  }

}
