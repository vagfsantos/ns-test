import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ShelfListComponent } from './shelf-list/shelf-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ShelfListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
