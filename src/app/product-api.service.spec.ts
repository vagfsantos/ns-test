import { TestBed, inject, async } from '@angular/core/testing';

import { ProductApiService } from './product-api.service';

describe('ProductApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductApiService]
    });
  });

  it('should be created', inject([ProductApiService], (service: ProductApiService) => {
    expect(service).toBeTruthy();
  }));

  it('should return a valid product JSON', async(inject([ProductApiService], (service: ProductApiService) => {
    let result = service.getAll();
    result.then( json => {
      expect(json.products).toBeTruthy();
    })
  })));
});
