import { Observable, of, combineLatest } from 'rxjs';
import { filter, switchMap, map, tap, distinctUntilChanged } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Component, OnInit, HostBinding, ChangeDetectionStrategy } from '@angular/core';
import { ConfirmationDialogComponent } from '../confirmation-dialog';
import { PostsService } from '@sugar/app/core/posts.service';
import { Posting } from '@sugar/lib';

@Component({
  templateUrl: './expo-main.component.html',
  styleUrls: ['./expo-main.component.scss'],
})
export class ExpoMainComponent implements OnInit {
  @HostBinding()
  get class() {
    return this.loading
      ? 'column justify-start'
      : 'column justify-space-between';
  }

  loading = false;
  readonly posts: Observable<Posting[]>;
  readonly currentPostId: Observable<number>;
  readonly currentPosting: Observable<Posting | null>;
  readonly postingExists: Observable<boolean>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    public dialog: MatDialog,
    public postsService: PostsService
  ) {
    this.currentPostId = combineLatest(
      this.route.paramMap.pipe(
        map(params => +(params.get('postId') || '')),
        distinctUntilChanged()
      ),
      this.postsService.posts.pipe(filter(ps => ps.length > 0)),
      this.postsService.firstAvailableId,
    )
    .pipe(
      switchMap(([postIdParam, posts, firstAvailableId]) => {
        if (posts.find(p => p.id === postIdParam)) {
          return of(postIdParam);
        } else {
          return of(firstAvailableId).pipe(
            tap(id => this.router.navigate(['expo', id]))
          );
        }
      })
    );
    // this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) => {
    //     const postIdParam = params.get('postIdParam');
    //     return this.postsService.posts.pipe(
    //       map(ps => ps.find(p => p.id === postIdParam as any))
    //     )

    //     if (typeof postIdParam === 'string' && Number.isSafeInteger(+postIdParam)) {
    //       return of(+postIdParam);
    //     } else {
    //       return this.postsService.firstAvailableId.pipe(
    //         tap(id => this.router.navigate(['expo', id]))
    //       );
    //     }
    //   })
    // );

    this.currentPosting = this.currentPostId.pipe(
      switchMap(id =>
        this.postsService.posts.pipe(
          map(posts => posts.find(p => p.id === id) || null)
        )
      )
    );

    this.postingExists = this.currentPosting.pipe(map(p => !!p));

    this.route.queryParamMap.pipe(
      filter((params: ParamMap) => !!params.get('confirm')),
      switchMap(() => {
        const ref = this.dialog.open(ConfirmationDialogComponent, {
          width: '90%',
          minHeight: '50%',
          data: {
            headerIcon: 'check_circle',
            headerText: 'Thank you!',
            bodyText: 'Some stuff here',
            actionText: 'Done',
          }
        });

        return ref.afterClosed();
      })
    )
    .subscribe(() => {
      this.router.navigate([], {
        queryParams: {},
      });
    });

  }

  async ngOnInit() {
    try {
      this.loading = true;
      await this.postsService.getPostings();
      this.loading = false;
    } catch (err) {
      console.error(err);
      this.loading = false;
    }
  }

}
