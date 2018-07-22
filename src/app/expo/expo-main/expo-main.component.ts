import { filter, switchMap } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Component, OnInit, HostBinding, ChangeDetectionStrategy } from '@angular/core';
import { ConfirmationDialogComponent } from '../confirmation-dialog';

@Component({
  templateUrl: './expo-main.component.html',
  styleUrls: ['./expo-main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpoMainComponent implements OnInit {
  @HostBinding() class = 'column justify-space-between';

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    public dialog: MatDialog
  ) {
    this.route.queryParamMap.pipe(
      // startWith(this.route.paramMap.get('confirm')),
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
  }

}
