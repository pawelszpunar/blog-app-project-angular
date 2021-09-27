import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let user = this.authService.currentUser;
    console.log(user);
    if (user && user.roles.includes("ROLE_ADMIN")) {
      console.log("Rola admina znaleziona!");
      return true;
    }
    //this.router.navigate(['/login']);
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;
  }
}


// if (user && user.includes("ROLE_ADMIN")) {
