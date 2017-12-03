import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CartProductComponent } from './cart-product/cart-product.component';
import { CartComponent } from './cart.component';


@NgModule({
  declarations: [
    CartComponent,
    CartProductComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [

  ],
  exports: [
    CartComponent
  ]
})

export class CartModule{}
