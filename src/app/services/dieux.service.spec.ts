import { TestBed } from '@angular/core/testing';

import { DieuxService } from './dieux.service';


describe('DieuxService', () => {
  let service: DieuxService;

  beforeEach(() => {
    TestBed.configureTestingModule({

    });
    service = TestBed.inject(DieuxService);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
