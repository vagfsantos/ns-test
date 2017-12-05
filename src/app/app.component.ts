import { OfflineCartService } from './offline-cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  productsInCart = [];
  totalPrice: number = 0;

  constructor(private localStorage:OfflineCartService) {

  }

  ngOnInit() {
    let offlineData = this.localStorage.getProducts();

    if( offlineData ) {
      this.productsInCart = JSON.parse(offlineData);
    }
  }

  addProductToCart(data) {
    let isNewItem = true;

    this.productsInCart = this.productsInCart.map( dataIncart => {
      if( dataIncart.product.id === data.product.id && dataIncart.size === data.size ) {
        dataIncart.quantity += data.quantity;
        isNewItem = false;
      }
      return dataIncart;
    });

    if( isNewItem ) this.productsInCart.push(data);

    this.calcTotalPrice();
    this.saveOfflineCartData();
  }

  deleteProduct(data) {
    this.productsInCart = this.productsInCart.filter( productData => {
      if( productData.size !== data.size || productData.product.id !== data.id ) {
        return true;
      }
    });

    this.calcTotalPrice();
    this.saveOfflineCartData();
  }

  calcTotalPrice(){
    this.totalPrice = this.productsInCart.reduce( (prev, prod) => {
      return prev += prod.product.price * prod.quantity;
    }, 0);
  }

  saveOfflineCartData() {
    this.localStorage.saveProducts(this.productsInCart);
  }
}
