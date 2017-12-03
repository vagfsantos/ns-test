import { CurrencyPipe } from '@angular/common';
import { Component, OnInit, Input} from '@angular/core';
import { CustomPriceService } from '../../custom-price.service';

@Component({
  selector: 'app-shelf',
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.scss']
})
export class ShelfComponent implements OnInit {
  @Input() productInfo: any;

  constructor(private customPriceService: CustomPriceService) { }

  ngOnInit() {

  }

  getPriceFormated(price) {
    return this.customPriceService.getPriceFormated(price);
  }

  getInstallments(price) {
    return this.customPriceService.getInstallments(price, this.productInfo.installments);
  }
}
