import { TestBed } from '@angular/core/testing';

import { PressApiService } from './press-api.service';

describe('PressApiService', () => {
  let service: PressApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PressApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
