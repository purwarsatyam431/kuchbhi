import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCareerListComponent } from './admin-career-list.component';

describe('AdminCareerListComponent', () => {
  let component: AdminCareerListComponent;
  let fixture: ComponentFixture<AdminCareerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCareerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCareerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
