import { TestBed } from '@angular/core/testing';

import { AuthForCartGuard } from './auth-for-cart.guard';

describe('AuthForCartGuard', () => {
  let guard: AuthForCartGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthForCartGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
