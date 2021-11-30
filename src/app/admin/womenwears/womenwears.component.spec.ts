import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenwearsComponent } from './womenwears.component';

describe('WomenwearsComponent', () => {
  let component: WomenwearsComponent;
  let fixture: ComponentFixture<WomenwearsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomenwearsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenwearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
