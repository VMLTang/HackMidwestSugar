import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { GeolocationService } from '@sugar/app/core/geolocation.service';
import { Posting } from '@sugar/lib';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private readonly posts$ = new BehaviorSubject<Posting[]>([]);
  readonly posts: Observable<Posting[]>;

  constructor(
    private http: HttpClient,
    private locationService: GeolocationService
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
