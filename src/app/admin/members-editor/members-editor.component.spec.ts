import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersEditorComponent } from './members-editor.component';

describe('MembersEditorComponent', () => {
  let component: MembersEditorComponent;
  let fixture: ComponentFixture<MembersEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembersEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
