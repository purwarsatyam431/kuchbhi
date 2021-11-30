import { TestBed } from '@angular/core/testing';

import { MenserviceService } from './menservice.service';

describe('MenserviceService', () => {
  let service: MenserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
