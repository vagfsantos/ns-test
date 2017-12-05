import { TestBed, inject } from '@angular/core/testing';

import { OfflineCartService } from './offline-cart.service';

describe('OfflineCartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OfflineCartService]
    });
  });

  it('should be created', inject([OfflineCartService], (service: OfflineCartService) => {
    expect(service).toBeTruthy();
  }));
});
