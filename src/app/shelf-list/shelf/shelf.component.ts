import { CurrencyPipe } from '@angular/common';
import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-shelf',
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.scss']
})
export class ShelfComponent implements OnInit {
  @Input() productInfo: any;

  constructor() { }

  ngOnInit() {

  }

  getPriceFormated(price) {
    let finalPrice;
    let BRPrice = price.replace(/\,/gim, '#').replace(/\./gim, ',').replace(/\#/gim, '.');

    finalPrice = BRPrice.replace(/R\$/, '<span>R$</span>').replace(/\,.+/, (s)=> `<span>${s}</span>`);

    return finalPrice;
  }

  getInstallments(price) {
    let eachPrice = this.getPriceFormated(price);

    return `ou em ${this.productInfo.installments}x de ${eachPrice}`;
  }

}
