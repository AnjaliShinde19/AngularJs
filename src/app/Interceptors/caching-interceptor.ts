import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { of, tap } from 'rxjs';
import { RequestCache } from './request-cache';

export const cachingInterceptor: HttpInterceptorFn = (req, next) => {
  const cache = inject(RequestCache);
  const cachedResponse = cache.get(req);

  // Only cache GET requests
  if (req.method !== 'GET') {
    return next(req);
  }

  // If a cached response is found, return it immediately
  if (cachedResponse) {
    return of(cachedResponse);
  }

  // If no cached response, send the request and cache the response
  return next(req).pipe(
    tap(event => {
      if (event instanceof HttpResponse) {
        cache.put(req, event);
      }
    })
  );
};
