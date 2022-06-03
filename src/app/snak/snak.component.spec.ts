import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnakComponent } from './snak.component';

describe('SnakComponent', () => {
  let component: SnakComponent;
  let fixture: ComponentFixture<SnakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
