import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SzaubComponent } from './szaub.component';

describe('SzaubComponent', () => {
  let component: SzaubComponent;
  let fixture: ComponentFixture<SzaubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SzaubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SzaubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
