import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimateControllerComponent } from './ultimate-controller.component';

describe('UltimateControllerComponent', () => {
  let component: UltimateControllerComponent;
  let fixture: ComponentFixture<UltimateControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UltimateControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UltimateControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
