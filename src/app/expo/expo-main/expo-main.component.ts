import { ExpoService } from './../expo.service';
import { Observable } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Component, OnInit, HostBinding } from '@angular/core';
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
    public postsService: PostsService,
    public expoService: ExpoService
  ) {
    this.currentPostId = this.expoService.currentPostId;
    this.currentPosting = this.expoService.currentPosting;
    this.postingExists = this.expoService.postingExists;

    this.route.queryParamMap.pipe(
      filter((params: ParamMap) => !!params.get('confirm')),
      switchMap(() => {
        const ref = this.dialog.open(ConfirmationDialogComponent, {
          width: '90%',
          minHeight: '50%',
          data: {
            headerIcon: 'check_circle',
            headerText: 'Thank you!',
            bodyText: `
              We’ve sent your location and time, we'll let you know via SMS once we get a confirmation.
            `,
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
