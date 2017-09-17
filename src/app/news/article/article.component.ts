import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  
    public newsID: number;
    public newsTitle: string = ''
    public newsDescription: string = ''
    public newsContent: string = ''
    public newsDate:string = ''
    public newsCoverImage: string = 'assets/images/noImage.jpg'
  
    constructor(private http: HttpClient, private route: ActivatedRoute) { }
  
    ngOnInit() {
      this.route.params.subscribe(params => {
         this.newsID = +params['newsID'];
  
         if(this.newsID == 0) {
           this.newsID = null;
         }
      });
  
      if(this.newsID != null) {
        this.http.get('http://localhost/backend.php?action=getNewsById&id='+this.newsID).subscribe(newsData => {
          this.newsTitle = newsData[0].title;
          this.newsDescription = newsData[0].description;
          this.newsContent = newsData[0].content;
          this.newsCoverImage = newsData[0].cover;
          this.newsDate = newsData[0].date;
        });
      }
  }
  
    public options: Object = {
      charCounterCount: true,
      // Set the image upload parameter.
      imageUploadParam: 'fileToUpload',
  
      // Set the image upload URL.
      imageUploadURL: '/backend.php?action=uploadImage',
  
      // Additional upload params.
      imageUploadParams: {id: 'my_editor'},
  
      // Set request type.
      imageUploadMethod: 'POST',
  
      // Set max image size to 5MB.
      imageMaxSize: 5 * 1024 * 1024,
  
      // Allow to upload PNG and JPG.
      imageAllowedTypes: ['jpeg', 'jpg', 'png'],
  
    };

}
