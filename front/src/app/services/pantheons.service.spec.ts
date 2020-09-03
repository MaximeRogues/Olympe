import { TestBed } from '@angular/core/testing';

import { PantheonsService } from './pantheons.service';

describe('PantheonsService', () => {
  let service: PantheonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PantheonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
