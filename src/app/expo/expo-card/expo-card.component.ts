import { Posting } from '@sugar/lib';
import { PostsService } from '@sugar/app/core/posts.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, HostBinding, HostListener, Input } from '@angular/core';

@Component({
  selector: 'expo-card', // tslint:disable-line
  templateUrl: './expo-card.component.html',
  styleUrls: ['./expo-card.component.scss'],
  exportAs: 'card',
})
export class ExpoCardComponent implements OnInit {
  @HostBinding() class = 'column gap-20 grow';

  @HostBinding('style.transform')
  private transform = 'translateY(0px)';

  @HostBinding('style.opacity')
  opacity = 1;

  @HostBinding('style.transition')
  transition = 'transform .05s ease-in-out';

  @Input()
  posting: Posting;

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    public readonly postsService: PostsService,
  ) {}

  ngOnInit() {
  }

  set transitionDuration(t: number) {
    this.transition = `transform ${t}s ease-in-out`;
  }

  set translateY(y: number) {
    this.opacity = 1 - (y / -400);
    this.transform = `translateY(${y}px)`;
  }

  get translateY(): number {
    const y = this.transform.replace(/\D+/g, '');
    return Number.isSafeInteger(+y) ? +y : 0;
  }

  startInteractionScheduler() {
    this.router.navigate(['schedule'], {
      relativeTo: this.route
    });
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

  @HostListener('pandown', ['$event'])
  @HostListener('panup', ['$event'])
  onPanup($event: any) {
    this.translateY = $event.isFinal
      ? 0
      : $event.deltaY;

    if (this.translateY > 500) {
      this.startInteractionScheduler();
    }
  }

  @HostListener('swipeup', ['$event'])
  onSwipe($event: any) {
    this.startInteractionScheduler();
  }

}
