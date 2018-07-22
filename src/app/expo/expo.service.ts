import { Injectable } from '@angular/core';
import { Observable, of, combineLatest, ConnectableObservable } from 'rxjs';
import { filter, switchMap, map, tap, distinctUntilChanged, publishReplay } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '@sugar/app/core/posts.service';
import { Posting } from '@sugar/lib';

@Injectable()
export class ExpoService {
  readonly posts: Observable<Posting[]>;
  readonly currentPostId: Observable<number>;
  readonly currentPosting: Observable<Posting | null>;
  readonly postingExists: Observable<boolean>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    public postsService: PostsService
  ) {
    window['ExpoService'] = this;
    this.currentPostId = combineLatest(
      this.route.paramMap.pipe(
        map(params => +(params.get('postId') || '')),
        distinctUntilChanged()
      ),
      this.postsService.posts.pipe(filter(ps => ps.length > 0)),
    )
    .pipe(
      switchMap(([postIdParam, posts]) => {
        if (posts.find(p => p.id === postIdParam)) {
          return of(postIdParam);
        } else {
          return of(posts[0].id!).pipe(
            tap(id => this.router.navigate(['expo', id]))
          );
        }
      }),
      // publishReplay(1)
    ); // as ConnectableObservable<number>;

    // this.currentPostId.connect();


    this.currentPosting = combineLatest(
      this.currentPostId,
      this.postsService.posts
    )
    .pipe(map(([id, posts]) => posts.find(p => p.id === id) || null));

    this.postingExists = this.currentPosting.pipe(map(p => !!p));
  }
}
