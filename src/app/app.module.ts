import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import HeaderModule from './header/header.module';
import SearchResultListModule from './search-result-list/search-result-list.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    SearchResultListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule {}
