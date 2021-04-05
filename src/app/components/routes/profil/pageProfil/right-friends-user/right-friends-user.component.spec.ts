import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightFriendsUserComponent } from './right-friends-user.component';

describe('RightFriendsUserComponent', () => {
  let component: RightFriendsUserComponent;
  let fixture: ComponentFixture<RightFriendsUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightFriendsUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightFriendsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
