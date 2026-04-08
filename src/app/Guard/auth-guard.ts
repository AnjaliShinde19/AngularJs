import { inject } from '@angular/core';
import { CanActivateFn, Route, Router } from '@angular/router';
import { AuthService } from './auth-service';

// hardcoded user data.
const loggedInUser = {
  id: '12345',
  name: 'anjali',
  role: 'admin'
}

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const { role } = loggedInUser;

  // provides the route configuration options.
  const { routeConfig } = route;

  // provides the path of the route.
  const { path } = routeConfig as Route;

  // if user is administrator and is trying to access admin routes, allow access.
  if ((path?.includes('admin') || path?.includes('ReactiveFormsComponent')
    || path?.includes('NestedChildDemoComponent') || path?.includes('DynamicLazyLoadingComponent'))
    && role === 'admin') 
    {
    return true;
  }

  // Redirect to login if not authenticated
  return router.createUrlTree(['/forbidden']);
};
