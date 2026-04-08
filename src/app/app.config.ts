import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { authFuncInterceptor } from './Interceptors/auth-func-interceptor';
import { loggingClsInterceptor } from './Interceptors/logging-cls-interceptor';
import { errorInterceptor } from './Interceptors/error-interceptor';
import { loggingInterceptor } from './Interceptors/logging-interceptor';
import { cachingInterceptor } from './Interceptors/caching-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),

    //Functional modern interceptor approach
    // provideHttpClient(withInterceptors([authFuncInterceptor])),
    // provideHttpClient(withInterceptors([errorInterceptor])),
    // provideHttpClient(withInterceptors([loggingInterceptor])),
    // provideHttpClient(withInterceptors([cachingInterceptor])),

    // //Class based old interceptor approach
    // provideHttpClient(withInterceptorsFromDi()),
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: loggingClsInterceptor,
    //   multi: true // `multi: true` is crucial for multiple interceptors
    // }

  ]
};
