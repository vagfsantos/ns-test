import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { CustomPriceService } from '../custom-price.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() productsInCart;
  @Input() totalPrice: number;
  @Output() onProductDeleted = new EventEmitter();
  private installmentTimes: number = 10;
  private cartIsOpen = false;

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

  triggerCart(e) {
    e.preventDefault();
    this.cartIsOpen = !this.cartIsOpen;
  }

  deleteProduct(e) {
    this.onProductDeleted.emit(e);
  }
}
