import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductApiService } from '../product-api.service';

import { ShelfListComponent } from './shelf-list.component';
import { ShelfComponent } from './shelf/shelf.component';

@NgModule({
  declarations: [
    ShelfListComponent,
    ShelfComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    ProductApiService
  ],
  exports: [
    ShelfListComponent
  ]
})

export class ShelfListModule{}
