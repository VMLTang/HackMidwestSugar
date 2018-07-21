import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { TransactionsService } from '@sugar/app/core/transactions.service';
import { Transaction } from '@sugar/lib';

@Component({
  selector: 'sugar-feed',
  templateUrl: './sugar-feed.html',
  styleUrls: ['./sugar-feed.scss']
})
export class SugarFeedComponent {
  public sugarFeed$: Observable<Transaction[]>;

  constructor(private transactionService: TransactionsService) {
    this.sugarFeed$ = this.transactionService.transactions$;
  }
}
