import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { CustomPriceService } from '../custom-price.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() productsInCart;
  @Input() totalPrice: number;
  private installmentTimes: number = 10;

  constructor(private customPriceService:CustomPriceService) {

  }

  ngOnInit() {

  }

  getPriceFormated(price) {
    return this.customPriceService.getPriceFormated(price);
  }

  getInstallments(price) {
    return this.customPriceService.getInstallments(price, this.installmentTimes);
  }
}
