import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';

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
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue:
        'https://rolling-scopes-school.github.io/olegpl1993-ANGULAR2023Q4/',
    },
  ],
  bootstrap: [AppComponent],
})
export default class AppModule {}
