import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonConnecterComponent } from './non-connecter.component';

describe('NonConnecterComponent', () => {
  let component: NonConnecterComponent;
  let fixture: ComponentFixture<NonConnecterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonConnecterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonConnecterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
