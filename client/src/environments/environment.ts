import { OktaConfig } from '@okta/okta-angular/dist/okta/models/okta.config';

const oktaDevConfig: OktaConfig = {
  issuer: 'https://dev-974784.oktapreview.com/oauth2/default',
  redirectUri: 'https://localhost:4200/implicit/callback',
  clientId: '0oafs2u945PbmLYAu0h7',
};

export const environment = {
  production: false,
  oktaConfig: oktaDevConfig,
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
import 'zone.js/dist/zone-error';  // Included with Angular CLI.
