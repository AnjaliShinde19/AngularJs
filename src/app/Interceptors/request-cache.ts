import { HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RequestCache {
  private cache = new Map<string, HttpEvent<any>>();

  get(req: HttpRequest<any>): HttpEvent<any> | undefined {
    return this.cache.get(req.urlWithParams);
  }

  put(req: HttpRequest<any>, event: HttpEvent<any>): void {
    this.cache.set(req.urlWithParams, event);
  }
}
