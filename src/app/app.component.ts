import { Component, HostBinding } from '@angular/core';
import { OktaAuthService } from '../../node_modules/@okta/okta-angular';

@Component({
  selector: 'sugar-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @HostBinding() class = 'mat-typography';

  constructor(
    public auth: OktaAuthService
  ) {
    window['auth'] = this.auth;
  }
}
