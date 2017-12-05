import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ShelfListModule } from './shelf-list/shelf-list.module';
import { CartModule } from './cart/cart.module';

import { AppComponent } from './app.component';
import { CustomPriceService } from './custom-price.service';
import { OfflineCartService } from './offline-cart.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ShelfListModule,
    CartModule
  ],
  providers: [
    CustomPriceService,
    OfflineCartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
