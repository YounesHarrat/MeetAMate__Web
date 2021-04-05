import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftListGameUserComponent } from './left-list-game-user.component';

describe('LeftListGameUserComponent', () => {
  let component: LeftListGameUserComponent;
  let fixture: ComponentFixture<LeftListGameUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftListGameUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftListGameUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
