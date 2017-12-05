import { Injectable } from '@angular/core';

@Injectable()
export class OfflineCartService {
  private cartKey = 'ns-cart';

  constructor() { }

  saveProducts(products) {
    window.localStorage[this.cartKey] = JSON.stringify(products);
  }

  getProducts() {
    return window.localStorage[this.cartKey];
  }
}
