import { CurrencyPipe } from '@angular/common';
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { CustomPriceService } from '../../custom-price.service';

@Component({
  selector: 'app-shelf',
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.scss']
})
export class ShelfComponent implements OnInit {
  @Input() productInfo: any;
  @Output() onProductInCart = new EventEmitter();

  private quantityInput: number = 1;
  private sizeInput: string;

  constructor(private customPriceService: CustomPriceService) { }

  ngOnInit() {

  }

  getPriceFormated(price) {
    return this.customPriceService.getPriceFormated(price);
  }

  getInstallments(price) {
    return this.customPriceService.getInstallments(price, this.productInfo.installments);
  }

  addProductToCart(e) {
    if( !this.sizeInput ) {
      window.alert('Selecione uma variação de tamanho');
      return;
    }

    this.onProductInCart.emit({
      product: this.productInfo,
      quantity: this.quantityInput,
      size: this.sizeInput
    })
  }

  setSize(e) {
    this.sizeInput = e.target.value;
  }
}
