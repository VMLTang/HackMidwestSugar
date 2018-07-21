import { Component } from '@angular/core';
import { TransactionsService } from '@sugar/app/core/transactions.service';
import { Transaction } from '@sugar/lib';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'sugar-feed',
  templateUrl: './sugar-feed.html',
  styleUrls: ['./sugar-feed.scss']
})
export class SugarFeedComponent {
  public sugarFeed$: Observable<Transaction[]>;
  private whichFeedSubject: BehaviorSubject<'MAP' | 'LIST'> = new BehaviorSubject<'MAP' | 'LIST'>('LIST');

  public whichFeed$: Observable<'MAP' | 'LIST'> = this.whichFeedSubject.asObservable();

  constructor(private transactionService: TransactionsService) {
    this.sugarFeed$ = this.transactionService.transactions$;
  }

  public showFeedView(view: 'MAP' | 'LIST'): void {
      this.whichFeedSubject.next(view);
  }
}
