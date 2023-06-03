import { TestBed } from '@angular/core/testing';

import { IndicatorApiService } from './indicator-api.service';

describe('IndicatorApiService', () => {
  let service: IndicatorApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndicatorApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
