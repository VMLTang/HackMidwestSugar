import { Router, ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class SchedulerService {

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {
    console.log(`I'm the SchedulerService`);
  }

  confirm() {
    console.log('CONFIRMING');
    this.router.navigate(['..'], {
      relativeTo: this.route,
      queryParams: {
        confirm: true
      }
    });
  }



  destroy() {
    console.log('destroying the scheduler service');
  }
}
