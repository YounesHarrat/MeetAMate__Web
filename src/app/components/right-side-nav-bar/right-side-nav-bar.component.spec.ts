import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSideNavBarComponent } from './right-side-nav-bar.component';

describe('RightSideNavBarComponent', () => {
  let component: RightSideNavBarComponent;
  let fixture: ComponentFixture<RightSideNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightSideNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightSideNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
