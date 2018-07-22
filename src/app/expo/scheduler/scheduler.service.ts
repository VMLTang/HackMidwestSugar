import { Router, ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { ExpoService } from './../expo.service';

@Injectable()
export class SchedulerService {

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    public expoService: ExpoService,

  ) {
    console.log(`I'm the SchedulerService`);
  }

  confirm() {
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
