import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import AuthService from './services/auth.service';

const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const authService = inject(AuthService);
  if (authService.isLogined()) return true;
  return router.createUrlTree(['/auth']);
};

export default authGuard;