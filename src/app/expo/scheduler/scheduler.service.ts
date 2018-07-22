import { Injectable } from '@angular/core';

@Injectable()
export class SchedulerService {

  constructor(

  ) {
    console.log(`I'm the SchedulerService`);
  }

  destroy() {
    console.log('destroying the scheduler service');
  }
}
