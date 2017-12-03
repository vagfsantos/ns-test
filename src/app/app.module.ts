import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ShelfListModule } from './shelf-list/shelf-list.module';
import { CustomPriceService } from './custom-price.service';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    ShelfListModule,
    FormsModule
  ],
  providers: [
    CustomPriceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
