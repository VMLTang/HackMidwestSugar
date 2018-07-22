import { OktaConfig } from '@okta/okta-angular/dist/okta/models/okta.config';
import 'zone.js/dist/zone-error';

const oktaDevConfig: OktaConfig = {
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
  production: false,
  oktaConfig: oktaDevConfig,
  oktaDomain: 'https://dev-974784.oktapreview.com',
  oktaGoogleIdpId: '0oafs6wsov96R1Vg50h7',
  hereConfig: hereConfig
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
  // Included with Angular CLI.
