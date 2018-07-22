/*
  CanActivate to mediate navigation to a route.
  CanActivateChild to mediate navigation to a child route.
  CanDeactivate to mediate navigation away from the current route.
  Resolve to perform route data retrieval before route activation.
  CanLoad to mediate navigation to a feature module loaded asynchronously.
*/

import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(
    public router: Router,
    private readonly oktaAuth: OktaAuthService
  ) {}

  canLoad() {
    return this.oktaAuth.isAuthenticated();
  }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (await this.oktaAuth.isAuthenticated()) {
      return true;
    } else {
      console.log('NAVIGATING TO LOGIN');
      this.router.navigate(['login']);
      return false;
    }
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.canActivate(route, state);
  }
}
