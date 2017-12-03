import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shelf-list',
  templateUrl: './shelf-list.component.html',
  styleUrls: ['./shelf-list.component.scss']
})
export class ShelfListComponent implements OnInit {
  products: any;

  constructor() { }

  ngOnInit() {
    fetch('/public/data/products.json')
      .then(res => res.json())
      .then(res => console.log(res))
      .catch( error => {
        console.log(error);
      })
  }

}
