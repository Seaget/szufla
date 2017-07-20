import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsControllerComponent } from './events-controller.component';

describe('EventsControllerComponent', () => {
  let component: EventsControllerComponent;
  let fixture: ComponentFixture<EventsControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
