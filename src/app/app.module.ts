import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import SearchResultModule from './search-result/search-result.module';
import HeaderModule from './header/header.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SearchResultModule, HeaderModule],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule {}
