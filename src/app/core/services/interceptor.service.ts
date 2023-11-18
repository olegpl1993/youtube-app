import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export default class Interceptor implements HttpInterceptor {
  // private apiKey = 'AIzaSyBoa9dWd02Nvz0RPSHYKXAHgd2nKAEAHu8';
  private apiKey = 'AIzaSyB9rWiwNDGbsAKgwcnQOTIwp87QGmaiU7Y';
  private baseUrl = 'https://www.googleapis.com/youtube/v3/';

  intercept(
    request: HttpRequest<string>,
    next: HttpHandler
  ): Observable<HttpEvent<string>> {
    const modifiedRequest = request.clone({
      url: this.baseUrl + request.url,
      setParams: { key: this.apiKey },
    });

    return next.handle(modifiedRequest);
  }
}
