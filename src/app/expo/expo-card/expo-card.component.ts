import { Component, OnInit, ChangeDetectionStrategy, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'expo-card', // tslint:disable-line
  templateUrl: './expo-card.component.html',
  styleUrls: ['./expo-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpoCardComponent implements OnInit {
  @HostBinding() class = 'column gap-20 grow';

  @HostBinding('style.transform')
  private transform = 'translateY(0px)';

  @HostBinding('style.transition')
  private transition = 'transform .05s ease-in-out';

  constructor() { }

  ngOnInit() {
  }

  set transitionDuration(t: number) {
    this.transition = `transform ${t}s ease-in-out`;
  }

  set translateY(y: number) {
    this.transform = `translateY(${y}px)`;
  }

  get translateY(): number {
    const y = this.transform.replace(/\D+/g, '');
    return Number.isSafeInteger(+y) ? +y : 0;
  }

  startInteraction() {
    // TODO: GO TO INTERACTION FLOW
    console.log('START INTERACTION');
  }

  @HostListener('panstart', ['$event'])
  onPanStart() {
    this.transitionDuration = 0;
  }

  @HostListener('panend', ['$event'])
  onRelease() {
    this.transitionDuration = 0.4;
    this.translateY = 0;
  }

  @HostListener('panup', ['$event'])
  onPanup($event: any) {
    this.translateY = $event.isFinal
      ? 0
      : $event.deltaY;

    if (this.translateY > 500) {
      this.startInteraction();
    }
  }

  @HostListener('swipeup', ['$event'])
  onSwipe($event: any) {
    this.startInteraction();
  }

}
