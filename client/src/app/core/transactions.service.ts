import { Injectable } from '@angular/core';
import { Transaction } from '@sugar/app/sugar-feed/sugar-feed.types';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  public transactions$: Observable<Transaction[]>;
  constructor() { }
}
