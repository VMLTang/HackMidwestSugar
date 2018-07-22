import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { SchedulerService } from './scheduler.service';
import { PostsService } from '@sugar/app/core/posts.service';

@Component({
  templateUrl: './scheduler-main.component.html',
  styleUrls: ['./scheduler-main.component.scss'],
  providers: [
    SchedulerService
  ]
})
export class SchedulerMainComponent implements OnInit, OnDestroy {

  @HostBinding() class = 'column justify-start';

  constructor(
    public scheduler: SchedulerService,
    public postsService: PostsService,
  ) {

  }

  async ngOnInit() {
    try {
      await this.postsService.getPostings();
    } catch (err) {
      console.error(err);
    }
  }

  ngOnDestroy() {
    this.scheduler.destroy();
  }

}
