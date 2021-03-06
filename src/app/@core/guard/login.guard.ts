﻿import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class LoginGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      const user = localStorage.getItem('currentUser');
        if (!user) {
              return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['pages/dashboard']);
        return false;
    }
}
