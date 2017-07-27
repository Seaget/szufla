import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkKeeperComponent } from './link-keeper.component';

describe('LinkKeeperComponent', () => {
  let component: LinkKeeperComponent;
  let fixture: ComponentFixture<LinkKeeperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkKeeperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkKeeperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
