import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilDialogComponent } from './user-profil-dialog.component';

describe('UserProfilDialogComponent', () => {
  let component: UserProfilDialogComponent;
  let fixture: ComponentFixture<UserProfilDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProfilDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfilDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
