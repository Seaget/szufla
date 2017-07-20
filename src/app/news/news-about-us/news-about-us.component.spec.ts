import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsAboutUsComponent } from './news-about-us.component';

describe('NewsAboutUsComponent', () => {
  let component: NewsAboutUsComponent;
  let fixture: ComponentFixture<NewsAboutUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsAboutUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
