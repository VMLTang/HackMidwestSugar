import { Component, OnInit, OnDestroy } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import * as OktaSignIn from '@okta/okta-signin-widget';
import { environment } from '@sugar/environments/environment';

@Component({
  selector: 'sugar-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  widget = new OktaSignIn({
    baseUrl: environment.oktaDomain,
    clientId: environment.oktaConfig.clientId,
    idpDisplay: 'PRIMARY',
    authParams: {
      display: 'page',
      responseType: ['id_token', 'token'],
      scopes: ['openid', 'email', 'profile', 'phone'],
    },
    redirectUri: environment.oktaConfig.redirectUri,
    idps: [
      {
        type: 'GOOGLE',
        id: environment.oktaGoogleIdpId
      }
    ],
  });

  constructor(
    private readonly oktaAuth: OktaAuthService
  ) {
    window['widget'] = this;
  }

  ngOnDestroy() {
    console.log('destroying the things!');
    this.widget.remove();
  }


  ngOnInit() {
    this.widget.renderEl(
      { el: '#okta-signin-container'},
      (res: any) => {
        console.log(res);
        if (res.status === 'SUCCESS') {
          console.log(`REDIRECTION NOW`);
          this.oktaAuth.loginRedirect('/', { sessionToken: res.session.token });
          // Hide the widget
          this.widget.hide();
        }
      },
      (err: any) => {
        throw err;
      }
    );
  }

}

/*
https://dev-974784.oktapreview.com/oauth2/default/v1/authorize
  ?client_id=0oafs2u945PbmLYAu0h7
  &redirect_uri=https%3A%2F%2Flocalhost%3A4200%2Fimplicit%2Fcallback
  &response_type=id_token%20token
  &response_mode=fragment
  &state=4p6By2RO85zoyNQaVgWa94JDdOw3XFqUEKZw6BPUYZCranOeRRuJxQJejjMTFjij
  &nonce=03Mlu9PVF9WpEQjqQXNLsD8sKhwRR9FcOHy5lC9FhtH4yKE4kEBPlsDOAzCCKAak
  &sessionToken=20111UqJT6Ve1Zj_5lP7DCz3q7fGC1RBAEj-lSWjk5g8Ql7evXxcwat
  &scope=openid%20email
*/
