import { HttpClient } from '@angular/common/http';
import { Posting } from '@sugar/lib';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Injectable } from '../../../node_modules/@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private readonly posts$ = new BehaviorSubject<Posting[]>([]);
  readonly posts: Observable<Posting[]>;
  readonly firstAvailableId: Observable<number>;

  constructor(
    private http: HttpClient,
  ) {
    this.posts = this.posts$.asObservable();


    // this.firstAvailableId = this.posts.pipe(
    //   filter(posts => posts.length > 0),
    //   map(([ post ]) => post.id)
    // );
  }

  getPostings(): Promise<Posting[]> {

    return this.http.get<Posting[]>(
      'https://vmltang-sugar-api.azurewebsites.net/api/postings/lookup'
    )
    .pipe(tap(postings => this.posts$.next(postings)))
    .toPromise();
  }

}
