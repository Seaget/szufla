import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SzaubContollerComponent } from './szaub-contoller.component';

describe('SzaubContollerComponent', () => {
  let component: SzaubContollerComponent;
  let fixture: ComponentFixture<SzaubContollerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SzaubContollerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SzaubContollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
