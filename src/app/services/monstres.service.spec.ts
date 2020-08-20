import { TestBed } from '@angular/core/testing';

import { MonstresService } from './monstres.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


describe('MonstresService', () => {
  let service: MonstresService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientModule
      ]

    });
    service = TestBed.inject(MonstresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
