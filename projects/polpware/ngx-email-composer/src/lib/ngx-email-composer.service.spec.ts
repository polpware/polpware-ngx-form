import { TestBed } from '@angular/core/testing';

import { NgxEmailComposerService } from './ngx-email-composer.service';

describe('NgxEmailComposerService', () => {
  let service: NgxEmailComposerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxEmailComposerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
