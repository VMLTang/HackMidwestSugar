import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  public posts$: Observable<any>;
  constructor() { }
}
