import { TestBed } from '@angular/core/testing';

import { DieuxService } from './dieux.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


describe('DieuxService', () => {
  let service: DieuxService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientModule
      ]

    });
    service = TestBed.inject(DieuxService);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
