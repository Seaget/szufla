import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsUltimateComponent } from './what-is-ultimate.component';

describe('WhatIsUltimateComponent', () => {
  let component: WhatIsUltimateComponent;
  let fixture: ComponentFixture<WhatIsUltimateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatIsUltimateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatIsUltimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
