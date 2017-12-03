import { Component, OnInit } from '@angular/core';
import { ProductApiService } from '../product-api.service';

@Component({
  selector: 'app-shelf-list',
  templateUrl: './shelf-list.component.html',
  styleUrls: ['./shelf-list.component.scss']
})
export class ShelfListComponent implements OnInit {
  data: any = {
    products: []
  };

  hasError: boolean = false;

  constructor(private productApiService: ProductApiService) { }

  ngOnInit() {
    this.productApiService.getAll()
      .then(res => this.data = res)
      .catch( error => {
        console.log(error);
        this.hasError = true;
      });
  }
}
