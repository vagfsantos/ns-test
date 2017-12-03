import { Injectable } from '@angular/core';

@Injectable()
export class ProductApiService {

  constructor() { }

  getAll() {
    return fetch('/public/data/products.json')
      .then(res => res.json())
      .catch( error => {
        console.log(error);
      });
  }
}
