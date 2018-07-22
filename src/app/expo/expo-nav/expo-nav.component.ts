import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'expo-nav', // tslint:disable-line
  templateUrl: './expo-nav.component.html',
  styleUrls: ['./expo-nav.component.scss']
})
export class ExpoNavComponent implements OnInit {
  @HostBinding() class = 'row align-center gap-5 justify-space-between p-x-10 p-y-0';

  constructor() { }

  ngOnInit() {
  }

}
