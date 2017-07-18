import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-article-item',
  templateUrl: './news-article-item.component.html',
  styleUrls: ['./news-article-item.component.css']
})
export class NewsArticleItemComponent implements OnInit {
  @Input() title:string;
  @Input() image:string;
  @Input() description:string;
  @Input() id:string;

  constructor() { }

  ngOnInit() {
  }

}
