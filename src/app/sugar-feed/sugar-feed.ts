import { Component } from '@angular/core';
import { PostsService } from '@sugar/app/core/posts.service';
import { StartService } from '@sugar/app/start/start.service';
import { Posting } from '@sugar/lib';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'sugar-feed',
  templateUrl: './sugar-feed.html',
  styleUrls: ['./sugar-feed.scss']
})
export class SugarFeedComponent {
  public sugarFeed$: Observable<Posting[]>;
  public hasStart$: Observable<boolean>;
  private whichFeedSubject: BehaviorSubject<'MAP' | 'LIST'> = new BehaviorSubject<'MAP' | 'LIST'>('MAP');

  public whichFeed$: Observable<'MAP' | 'LIST'> = this.whichFeedSubject.asObservable();

  constructor(
    private transactionService: PostsService,
    private startService: StartService
  ) {
    this.sugarFeed$ = this.transactionService.posts;
    this.hasStart$ = this.startService.hasStart$;
    this.transactionService.getPostings();
  }

  public showFeedView(view: 'MAP' | 'LIST'): void {
    console.log('view:', view);
      this.whichFeedSubject.next(view);
  }
}
