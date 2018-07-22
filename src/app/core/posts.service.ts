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
  readonly firstAvailableId: Observable<number>;

  constructor(
    private http: HttpClient,
  ) {
    window['PostsService'] = this;
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

  grantPosting(
    postId: number,
    grantorId: number,
    pickupTime: string,
  ) {
    return this.http.post<Posting[]>(
      `https://vmltang-sugar-api.azurewebsites.net/api/postings/${postId}/grant`,
      {
        grantedBy: grantorId,
        pickupTime: pickupTime
      }
    )
    .toPromise();


  }
}
