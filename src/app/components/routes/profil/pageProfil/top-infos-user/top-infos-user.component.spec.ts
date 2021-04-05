import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopInfosUserComponent } from './top-infos-user.component';

describe('TopInfosUserComponent', () => {
  let component: TopInfosUserComponent;
  let fixture: ComponentFixture<TopInfosUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopInfosUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopInfosUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
