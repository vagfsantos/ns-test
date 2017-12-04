import { Component, OnInit, Input } from '@angular/core';
import { CustomPriceService } from '../../custom-price.service';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.scss']
})
export class CartProductComponent implements OnInit {
  @Input() productData;

  constructor( private customPriceService: CustomPriceService) { }

  ngOnInit() {
    console.log(this.productData)
  }

  getPriceFormated(price) {
    return this.customPriceService.getPriceFormated(price);
  }
}
