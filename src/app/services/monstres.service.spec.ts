import { TestBed } from '@angular/core/testing';

import { MonstresService } from './monstres.service';


describe('MonstresService', () => {
  let service: MonstresService;

  beforeEach(() => {
    TestBed.configureTestingModule({

    });
    service = TestBed.inject(MonstresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
