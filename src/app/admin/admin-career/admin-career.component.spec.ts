import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCareerComponent } from './admin-career.component';

describe('AdminCareerComponent', () => {
  let component: AdminCareerComponent;
  let fixture: ComponentFixture<AdminCareerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCareerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCareerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
