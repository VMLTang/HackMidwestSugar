import { Component } from '@angular/core';
import { TransactionsService } from '@sugar/app/core/transactions.service';
import { StartService } from '@sugar/app/start/start.service';
import { Transaction } from '@sugar/lib';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'sugar-feed',
  templateUrl: './sugar-feed.html',
  styleUrls: ['./sugar-feed.scss']
})
export class SugarFeedComponent {
  public sugarFeed$: Observable<Transaction[]>;
  public hasStart$: Observable<boolean>;
  private whichFeedSubject: BehaviorSubject<'MAP' | 'LIST'> = new BehaviorSubject<'MAP' | 'LIST'>('MAP');

  public whichFeed$: Observable<'MAP' | 'LIST'> = this.whichFeedSubject.asObservable();

  constructor(
    private transactionService: TransactionsService,
    private startService: StartService
  ) {
    this.sugarFeed$ = this.transactionService.transactions$;
    this.hasStart$ = this.startService.hasStart$;
  }

  public showFeedView(view: 'MAP' | 'LIST'): void {
    console.log('view:', view);
      this.whichFeedSubject.next(view);
  }
}
