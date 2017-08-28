import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SulifrizbiComponent } from './sulifrizbi.component';

describe('SulifrizbiComponent', () => {
  let component: SulifrizbiComponent;
  let fixture: ComponentFixture<SulifrizbiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SulifrizbiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SulifrizbiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
