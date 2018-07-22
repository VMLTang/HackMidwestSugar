import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'sugar-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @HostBinding() class = 'mat-typography';
}
