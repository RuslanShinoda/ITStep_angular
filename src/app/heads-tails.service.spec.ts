import { TestBed } from '@angular/core/testing';

import { HeadsTailsService } from './heads-tails.service';

describe('HeadsTailsService', () => {
  let service: HeadsTailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeadsTailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
