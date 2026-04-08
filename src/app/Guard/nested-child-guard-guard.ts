import { CanActivateChildFn, Route, Router } from '@angular/router';
import { inject } from '@angular/core';

// hardcoded user data.
const loggedInUser = {
  id: '12345',
  name: 'anjali',
  role: 'admin'
}

export const nestedChildGuardGuard: CanActivateChildFn = (childRoute, state) => {
  const router = inject(Router);

  const { role } = loggedInUser;

  // provides the route configuration options.
  const { routeConfig } = childRoute;

  // provides the path of the route.
  const { path } = routeConfig as Route;

  // if user is administrator and is trying to access admin routes, allow access.
  if ((!(path?.includes('spec'))) || (path?.includes('product-detail') && path?.includes('overview'))) {
    return true;
  }

  // Redirect to login if not authenticated
  return router.createUrlTree(['/forbidden']);
};
