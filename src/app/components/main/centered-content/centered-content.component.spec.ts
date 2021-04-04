import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenteredContentComponent } from './centered-content.component';

describe('CenteredContentComponent', () => {
  let component: CenteredContentComponent;
  let fixture: ComponentFixture<CenteredContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenteredContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CenteredContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
