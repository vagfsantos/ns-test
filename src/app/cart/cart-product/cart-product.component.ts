import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CustomPriceService } from '../../custom-price.service';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.scss']
})
export class CartProductComponent implements OnInit {
  @Input() productData;
  @Output() onProductDeleted = new EventEmitter();

  constructor( private customPriceService: CustomPriceService) { }

  ngOnInit() {

  }

  getPriceFormated(price) {
    return this.customPriceService.getPriceFormated(price);
  }

  deleteProduct(e) {
    e.preventDefault();
    this.onProductDeleted.emit({
      id: this.productData.product.id,
      size: this.productData.size
    })
  }
}
