import { TestBed } from '@angular/core/testing';

import { HerosService } from './heros.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


describe('HerosService', () => {
  let service: HerosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientModule
      ]

    });
    service = TestBed.inject(HerosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
