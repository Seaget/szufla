import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SotgComponent } from './sotg.component';

describe('SotgComponent', () => {
  let component: SotgComponent;
  let fixture: ComponentFixture<SotgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SotgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SotgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
