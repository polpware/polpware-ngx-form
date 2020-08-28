import { TestBed } from '@angular/core/testing';

import { NgxInputValidatorsService } from './ngx-input-validators.service';

describe('NgxInputValidatorsService', () => {
  let service: NgxInputValidatorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxInputValidatorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
