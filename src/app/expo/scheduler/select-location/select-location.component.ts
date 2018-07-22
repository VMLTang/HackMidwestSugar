import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'select-location', // tslint:disable-line
  templateUrl: './select-location.component.html',
  styleUrls: ['./select-location.component.scss']
})
export class SelectLocationComponent implements OnInit {
  @HostBinding() class = 'column justify-space-between';

  constructor() { }

  ngOnInit() {
  }

}
