import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  templateUrl: './expo-main.component.html',
  styleUrls: ['./expo-main.component.scss']
})
export class ExpoMainComponent implements OnInit {
  @HostBinding() class = 'column justify-space-between';

  constructor() { }

  ngOnInit() {
  }

}
