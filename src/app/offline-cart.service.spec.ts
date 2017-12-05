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

  it('should save and get data from localStorage', inject([OfflineCartService], (service: OfflineCartService) => {
    let fakeData = {test: true};
    service.saveProducts(fakeData);

    let savedData = JSON.parse(service.getProducts())
    expect( savedData.test ).toBeTruthy();
  }));
});
