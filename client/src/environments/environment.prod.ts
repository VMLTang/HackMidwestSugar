import { OktaConfig } from '@okta/okta-angular/dist/okta/models/okta.config';

const oktaProdConfig: OktaConfig = {
  issuer: 'https://dev-974784.oktapreview.com/oauth2/default',
  redirectUri: 'https://localhost:4200/implicit/callback',
  clientId: '0oafs2u945PbmLYAu0h7',
};

const hereConfig = {
  'app_id': 'uf15v48L6LE8m0gPzETV',
  'app_code': 'wFGAWN-X2t5RLJYc8Ul6Aw',
  useCIT: true,
  useHTTPS: true
};

export const environment = {
  production: true,
  oktaConfig: oktaProdConfig,
  hereConfig: hereConfig
};
