import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ShelfListModule } from './shelf-list/shelf-list.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ShelfListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
