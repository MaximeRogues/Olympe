import { TestBed } from '@angular/core/testing';

import { TypePersoService } from './type-perso.service';

describe('TypePersoService', () => {
  let service: TypePersoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypePersoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
