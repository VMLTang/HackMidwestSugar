import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { OktaAuthService } from '@okta/okta-angular';
import { from } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private readonly oktaAuth: OktaAuthService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return from(this.oktaAuth.getAccessToken())
      .pipe(
        switchMap(accessToken => {
          if (!accessToken) {
            console.log(`no access token so not attaching to request`);
            return next.handle(req);
          } else {
            console.log(`attaching token to request!`);

            const authReq = req.clone({
              headers: req.headers.set('Authorization', `Bearer ${accessToken}`)
            });

            return next.handle(authReq);
          }


        })
      );
  }
}
