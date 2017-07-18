import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsArticleItemComponent } from './news-article-item.component';

describe('NewsArticleItemComponent', () => {
  let component: NewsArticleItemComponent;
  let fixture: ComponentFixture<NewsArticleItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsArticleItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsArticleItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
