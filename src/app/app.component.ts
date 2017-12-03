import { element } from 'protractor';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  productsInCart = [];

  addProductToCart(product) {
    this.productsInCart.push(product);
  }
}
