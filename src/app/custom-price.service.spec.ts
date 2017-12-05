import { TestBed, inject } from '@angular/core/testing';

import { CustomPriceService } from './custom-price.service';

describe('CustomPriceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomPriceService]
    });
  });

  it('should be created', inject([CustomPriceService], (service: CustomPriceService) => {
    expect(service).toBeTruthy();
  }));

  it('should return a formated HTML price string', inject([CustomPriceService], (service: CustomPriceService) => {
    let price = service.getPriceFormated('R$22.95');
    expect(price).toBe('<span>R$ </span>22<span>,95</span>');
  }));

  it('should return a formated HTML installment string', inject([CustomPriceService], (service: CustomPriceService) => {
    let price = service.getInstallments('R$22.95', 10);
    expect(price).toBe('ou em 10x de <span>R$ </span>22<span>,95</span>');
  }));
});
