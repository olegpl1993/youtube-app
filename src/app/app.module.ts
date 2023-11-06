import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import FilterPipe from './youtube/pipes/filter.pipe';
import CoreModule from './core/core.module';
import YoutubeModule from './youtube/youtube.module';
import AuthModule from './auth/auth.module';
import PageNotFoundComponent from '../shared/page-not-found/page-not-found.component';

@NgModule({
  declarations: [AppComponent, FilterPipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    HttpClientModule,
    YoutubeModule,
    AuthModule,
    PageNotFoundComponent,
  ],
  providers: [FilterPipe],
  bootstrap: [AppComponent],
})
export default class AppModule {}
