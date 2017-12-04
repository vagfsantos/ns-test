import { Injectable } from '@angular/core';

@Injectable()
export class CustomPriceService {

  constructor() { }

  getPriceFormated(price) {
    let finalPrice;
    let BRPrice = price.replace(/\,/gim, '#').replace(/\./gim, ',').replace(/\#/gim, '.');

    finalPrice = BRPrice.replace(/R\$/, '<span>R$ </span>').replace(/\,.+/, (s)=> `<span>${s}</span>`);

    return finalPrice;
  }

  getInstallments(price, installments) {
    let eachPrice = this.getPriceFormated(price);

    return `ou em ${installments}x de ${eachPrice}`;
  }

}
