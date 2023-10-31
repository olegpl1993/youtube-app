import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import HeaderModule from './header/header.module';
import SearchResultListModule from './search-result-list/search-result-list.module';
import FilterPipe from './filter.pipe';

@NgModule({
  declarations: [AppComponent, FilterPipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    SearchResultListModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [FilterPipe],
  bootstrap: [AppComponent],
})
export default class AppModule {}
