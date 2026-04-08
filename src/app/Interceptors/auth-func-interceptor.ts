import { HttpInterceptorFn } from '@angular/common/http';

export const authFuncInterceptor: HttpInterceptorFn = (req, next) => {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJp'; // Get token from a service, possibly using inject()

  // Clone the request to add the Authorization header
  const clonedRequest = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });

  console.log('Intercepted Functional Request:', clonedRequest.url);
  return next(clonedRequest);
};
