import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Transaction } from '@sugar/lib';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  readonly transactions$: Observable<Transaction[]>;

  constructor() {

    this.transactions$ = of([
      {
        id: 'abc',
      },
      {
        id: 'abc',
      },
    ]);
  }
}
