import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, retry, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    retry(2), // Automatically retry failed requests up to 2 times
    catchError((error: HttpErrorResponse) => 
    {
      //console.log(error);
      // Handle the error globally
      if (error.status === 404) 
      {
        // Redirect to login page or show a notification
        console.error('Wrong url request, redirecting...');
      } 
      else 
      {
        console.error(`HTTP error: ${error.message}`);
      }
      return throwError(() => new Error('Something bad happened; please try again later.'));
    })
  );
};
