import { GeolocationService } from '@sugar/app/core/geolocation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sugar-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public location: GeolocationService
  ) {
    window['home'] = this;
  }

  ngOnInit() {
  }

}
