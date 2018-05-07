import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { CustomerService } from './customer.service';

describe('CustomerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [CustomerService]
    });
  });

  it('should be created', inject([CustomerService], (service: CustomerService) => {
    expect(service).toBeTruthy();
  }));
});
