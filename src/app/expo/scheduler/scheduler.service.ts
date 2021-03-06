import { switchMap, take } from 'rxjs/operators';
import { UsersService } from '@sugar/app/core/user.service';
import { PostsService } from '@sugar/app/core/posts.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { ExpoService } from './../expo.service';
import { from } from 'rxjs';

@Injectable()
export class SchedulerService {

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    public expoService: ExpoService,
    public userService: UsersService,
    public postsService: PostsService
  ) {
    console.log(`I'm the SchedulerService`);
  }

  async confirm() {
    console.log('confirm');
    this.expoService.currentPostId.pipe(
      switchMap(postId => {
        console.log(`post id ${postId}`);
        return from(this.postsService.grantPosting(
          postId,
          this.userService.userId! as any,
          (new Date()).toUTCString(),
        ));
      }),
      take(1)
    )
    .subscribe(() => {
      this.router.navigate(['..'], {
        relativeTo: this.route,
        queryParams: {
          confirm: true
        }
      });
    }, console.error);

    //   .subscribe(user =)
    // const user = this.userService.user$.g
    // this.postsService.grantPosting({
    //   id:

    // })
  }



  destroy() {
    console.log('destroying the scheduler service');
  }
}
