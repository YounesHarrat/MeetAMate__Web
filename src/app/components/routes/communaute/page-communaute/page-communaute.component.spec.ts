import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCommunauteComponent } from './page-communaute.component';

describe('PageCommunauteComponent', () => {
  let component: PageCommunauteComponent;
  let fixture: ComponentFixture<PageCommunauteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCommunauteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCommunauteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
