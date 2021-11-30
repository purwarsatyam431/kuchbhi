import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenswearsComponent } from './menswears.component';

describe('MenswearsComponent', () => {
  let component: MenswearsComponent;
  let fixture: ComponentFixture<MenswearsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenswearsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenswearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
