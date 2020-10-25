import { TestBed } from '@angular/core/testing';

import { ExampleinterceptorService } from './exampleinterceptor.service';

describe('ExampleinterceptorService', () => {
  let service: ExampleinterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExampleinterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
