import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberControllerComponent } from './memberController.component';

describe('memberControllerComponent', () => {
  let component: MemberControllerComponent;
  let fixture: ComponentFixture<MemberControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
