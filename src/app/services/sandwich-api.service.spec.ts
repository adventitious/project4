import { TestBed } from '@angular/core/testing';

import { SandwichApiService } from './sandwich-api.service';

describe('SandwichApiService', () => {
  let service: SandwichApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SandwichApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
