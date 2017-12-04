import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  productsInCart = [];
  totalPrice: number = 0;

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
  }

  deleteProduct(data) {
    this.productsInCart = this.productsInCart.filter( productData => {
      if( productData.size !== data.size && productData.product.id !== data.id ) {
        return true;
      }
    });
  }

  calcTotalPrice(){
    this.totalPrice = this.productsInCart.reduce( (prev, prod) => {
      return prev += prod.product.price * prod.quantity;
    }, 0);
  }
}
