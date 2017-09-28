import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-news-editor',
  templateUrl: './news-editor.component.html',
  styleUrls: ['./news-editor.component.css']
})
export class NewsEditorComponent implements OnInit {

  public newsID: number;
  public newsTitle: string = ''
  public newsDescription: string = ''
  public newsContent: string = ''
  public newsCoverImage: string = 'assets/images/noImage.jpg'

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

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
      });
    }
  }

  public saveNews() {
    $("#saveSuccess").hide(100);
    $("#saveWarning").hide(100);
    
    if(this.newsID == null && this.newsTitle != "" && this.newsDescription != "" && this.newsContent != "") {
      this.http.post('http://localhost/backend.php?action=createNews', JSON.stringify({
        id: null, title: this.newsTitle, cover: this.newsCoverImage, description: this.newsDescription, newsContent: this.newsContent
      })).map(
        data => {
          $("#saveSuccess").show(100);
        },
        error => {
            console.log('save error');
        }
      ).subscribe();
    } else if(this.newsTitle != "" && this.newsDescription != "" && this.newsContent != "") {
      console.log('update...');
      this.http.post('http://localhost/backend.php?action=editNews', JSON.stringify({
        id: this.newsID, title: this.newsTitle, cover: this.newsCoverImage, description: this.newsDescription, newsContent: this.newsContent
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

  fileChange(event) {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
        let file: File = fileList[0];
        let formData:FormData = new FormData();
        formData.append('fileToUpload', file, file.name);
        let headers = new Headers();
        /** No need to include Content-Type in Angular 4 */
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        this.http.post(`http://localhost/backend.php?action=uploadImage`, formData)
            .subscribe(
                data => {
                  this.newsCoverImage = data['link'];
                },
                error => console.log(error)
            )
    }
  }

  public closeSaveDialog() {
    $("#saveSuccess").hide(100);
  }

  public closeWarningDialog() {
    $("#saveWarning").hide(100);
  }
}
