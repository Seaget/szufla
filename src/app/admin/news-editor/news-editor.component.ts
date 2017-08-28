import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-news-editor',
  templateUrl: './news-editor.component.html',
  styleUrls: ['./news-editor.component.css']
})
export class NewsEditorComponent implements OnInit {

  public newsID: number;
  public newsTitle: string = 'Cím...'
  public newsDescription: string = 'Leírás...'
  public newsContent: string = 'Hír...'

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
       this.newsID = +params['newsID'];
    });

    this.http.get('http://localhost/backend.php?action=getNewsById&id='+this.newsID).subscribe(newsData => {
      console.log(newsData);
      this.newsTitle = newsData[0].title;
      this.newsDescription = newsData[0].description;
      this.newsContent = newsData[0].content;
    });
  }

  public saveNews() {
    if(this.newsID == null) {
      this.http.post('http://localhost/backend.php?action=createNews', JSON.stringify({
        id: null, title: this.newsTitle, description: this.newsDescription, newsContent: this.newsContent
      })).subscribe();
    } else {
      this.http.post('http://localhost/backend.php?action=editNews', JSON.stringify({
        id: this.newsID, title: this.newsTitle, description: this.newsDescription, newsContent: this.newsContent
      })).subscribe();
    }
  }
}
