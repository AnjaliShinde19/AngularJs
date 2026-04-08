import { HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs';

export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  
  const startTime = Date.now();
  console.log('Outgoing request:', req.method, req.url);

  return next(req).pipe(
    tap({
      next: (event) => {
        // Only log response events, not intermediate events
        if (event.type === 4) { // HttpEventType.Response
          const endTime = Date.now();
          const duration = endTime - startTime;
          console.log(`Incoming response for ${req.url}: Status ${event.status} (took ${duration}ms)`);
        }
      },
      error: (error) => {
        console.error('Request failed:', error);
      }
    })
  );
};
