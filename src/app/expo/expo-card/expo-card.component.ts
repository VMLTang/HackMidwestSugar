import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'expo-card', // tslint:disable-line
  templateUrl: './expo-card.component.html',
  styleUrls: ['./expo-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpoCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
