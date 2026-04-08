import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class loggingClsInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {

    console.log('Intercepted Class-Based Request:', request.url);
    return next.handle(request);
    
  }
}

