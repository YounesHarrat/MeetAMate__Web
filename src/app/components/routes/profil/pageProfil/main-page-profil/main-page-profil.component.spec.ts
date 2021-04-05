import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageProfilComponent } from './main-page-profil.component';

describe('MainPageProfilComponent', () => {
  let component: MainPageProfilComponent;
  let fixture: ComponentFixture<MainPageProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageProfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
