import { Component, HostBinding } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'sugar-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @HostBinding() class = 'mat-typography';

  constructor(
    public auth: OktaAuthService,
    public http: HttpClient
  ) {
    window['auth'] = this.auth;
    window['http'] = this.http;
  }
}
