import { TestBed } from '@angular/core/testing';

import { EspaceMembreService } from './espace-membre.service';

describe('EspaceMembreService', () => {
  let service: EspaceMembreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EspaceMembreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
