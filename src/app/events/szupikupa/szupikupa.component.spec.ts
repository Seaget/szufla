import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SzupikupaComponent } from './szupikupa.component';

describe('SzupikupaComponent', () => {
  let component: SzupikupaComponent;
  let fixture: ComponentFixture<SzupikupaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SzupikupaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SzupikupaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
