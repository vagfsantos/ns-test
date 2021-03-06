import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ProductApiService } from '../product-api.service';

import { ShelfListComponent } from './shelf-list.component';
import { ShelfComponent } from './shelf/shelf.component';

@NgModule({
  declarations: [
    ShelfListComponent,
    ShelfComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    ProductApiService
  ],
  exports: [
    ShelfListComponent
  ]
})

export class ShelfListModule{}
