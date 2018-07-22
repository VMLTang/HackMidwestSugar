import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Posting } from '@sugar/lib';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private readonly posts$ = new BehaviorSubject<Posting[]>([]);
  readonly posts: Observable<Posting[]>;

  constructor(
    private http: HttpClient
  ) {
    this.posts = this.posts$.asObservable();


  }

  getPostings(): Promise<Posting[]> {
    return this.http.get<Posting[]>(
      ''
    )
    .pipe(tap(postings => this.posts$.next(postings)))
    .toPromise();
  }

}
