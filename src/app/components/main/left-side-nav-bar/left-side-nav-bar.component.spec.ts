import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSideNavBarComponent } from './left-side-nav-bar.component';

describe('LeftSideNavBarComponent', () => {
  let component: LeftSideNavBarComponent;
  let fixture: ComponentFixture<LeftSideNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftSideNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftSideNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
