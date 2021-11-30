import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShirtsComponent } from './add-shirts.component';

describe('AddShirtsComponent', () => {
  let component: AddShirtsComponent;
  let fixture: ComponentFixture<AddShirtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddShirtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddShirtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
