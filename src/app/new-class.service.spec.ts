import { TestBed } from '@angular/core/testing';

import { NewClassService } from './new-class.service';

describe('NewClassService', () => {
  let service: NewClassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewClassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
