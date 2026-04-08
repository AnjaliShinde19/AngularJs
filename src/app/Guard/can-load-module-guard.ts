import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';

export const cAnLoadModuleGuard: CanMatchFn = (route, segments) => {

 const isEnabled = true;
  const router = inject(Router);

  // If isEnabled is true, allow matching; otherwise, skip
  return isEnabled ? true : router.createUrlTree(['/forbidden']);

};
