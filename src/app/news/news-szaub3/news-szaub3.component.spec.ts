import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsSzaub3Component } from './news-szaub3.component';

describe('NewsSzaub3Component', () => {
  let component: NewsSzaub3Component;
  let fixture: ComponentFixture<NewsSzaub3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsSzaub3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsSzaub3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
