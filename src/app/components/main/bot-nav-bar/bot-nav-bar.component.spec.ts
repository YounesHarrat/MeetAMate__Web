import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotNavBarComponent } from './bot-nav-bar.component';

describe('BotNavBarComponent', () => {
  let component: BotNavBarComponent;
  let fixture: ComponentFixture<BotNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
