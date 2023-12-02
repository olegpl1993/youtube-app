import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import CoreModule from './core/core.module';
import Interceptor from './core/services/interceptor.service';
import { StoreModule } from '@ngrx/store';
import { counterModule } from './redux/counter.module';
import { counterReducer } from './redux/counter.state';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({ count: counterReducer }),
    counterModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export default class AppModule {}
