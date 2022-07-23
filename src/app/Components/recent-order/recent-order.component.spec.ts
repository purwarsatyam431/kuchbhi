import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentOrderComponent } from './recent-order.component';

describe('RecentOrderComponent', () => {
  let component: RecentOrderComponent;
  let fixture: ComponentFixture<RecentOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
