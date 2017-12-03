import { element } from 'protractor';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  productsInCart = [];
  totalPrice: number = 0;

  addProductToCart(product) {
    this.productsInCart.push(product);
    this.calcTotalPrice();
  }

  calcTotalPrice(){
    this.totalPrice = this.productsInCart.reduce( (prev, prod) => {
      return prev += prod.product.price * prod.quantity;
    }, 0);
  }
}
