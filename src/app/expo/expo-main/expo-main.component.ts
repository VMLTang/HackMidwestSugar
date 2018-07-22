import { Observable } from 'rxjs';
import { filter, switchMap, map } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Component, OnInit, HostBinding, ChangeDetectionStrategy } from '@angular/core';
import { ConfirmationDialogComponent } from '../confirmation-dialog';
import { PostsService } from '@sugar/app/core/posts.service';
import { Posting } from '@sugar/lib';

@Component({
  templateUrl: './expo-main.component.html',
  styleUrls: ['./expo-main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpoMainComponent implements OnInit {
  @HostBinding() class = 'column justify-space-between';
  readonly posts: Observable<Posting[]>;
  readonly currentPostId: Observable<number>;
  readonly currentPost: Observable<Posting | null>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    public dialog: MatDialog,
    public postsService: PostsService
  ) {
    this.currentPostId = this.route.queryParamMap.pipe(
      map((params: ParamMap) => {
        const postId = params.get('postId') || NaN;
        return Number.isSafeInteger(+postId) ? +postId : 0;
      })
    );

    this.currentPost = this.currentPostId.pipe(
      switchMap(id =>
        this.postsService.posts.pipe(
          map(posts => posts.find(p => p.id === id) || null)
        )
      )
    );

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

  ngOnInit() {
    // this.postsService.getPostings();
  }

}
