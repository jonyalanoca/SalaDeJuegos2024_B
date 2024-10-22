import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const guardGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);


  if(auth.getLoggedInUser()){
    console.log(auth.loginUser);
    return true;
  }
  
  router.navigate(['/login']);
  return false;
};
