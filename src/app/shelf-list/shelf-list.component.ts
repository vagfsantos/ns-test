import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
    fetch('/public/data/products.json')
      .then(res => res.json())
      .then(res => this.data = res)
      .catch( error => {
        console.log(error);
        this.hasError = true;
      })
  }

}
