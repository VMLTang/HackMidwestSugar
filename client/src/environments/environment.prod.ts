import { OktaConfig } from '@okta/okta-angular/dist/okta/models/okta.config';

const oktaProdConfig: OktaConfig = {
  issuer: 'https://dev-974784.oktapreview.com/oauth2/default',
  redirectUri: 'https://localhost:4200/implicit/callback',
  clientId: '0oafs2u945PbmLYAu0h7',
};

export const environment = {
  production: true,
  oktaConfig: oktaProdConfig,
};
