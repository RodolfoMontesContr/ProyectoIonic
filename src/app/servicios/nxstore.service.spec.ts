import { TestBed } from '@angular/core/testing';

import { NxstoreService } from './nxstore.service';

describe('NxstoreService', () => {
  let service: NxstoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NxstoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
