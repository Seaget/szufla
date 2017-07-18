import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsSulifrizbi4Component } from './news-sulifrizbi4.component';

describe('NewsSulifrizbi4Component', () => {
  let component: NewsSulifrizbi4Component;
  let fixture: ComponentFixture<NewsSulifrizbi4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsSulifrizbi4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsSulifrizbi4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
