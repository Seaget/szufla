import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from './UserService';

@Injectable()
export class LoginAccessGuard implements CanActivate {

   constructor(private router: Router, private userService: UserService) {}
 
   public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      const currentUser = this.userService.isAuth();
      if(!currentUser) {
          this.router.navigate(["login"]);
          return false;
      }
      return true;
   }
}