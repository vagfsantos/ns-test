import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

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
  exports: [
    ShelfListComponent
  ]
})

export class ShelfListModule{}
