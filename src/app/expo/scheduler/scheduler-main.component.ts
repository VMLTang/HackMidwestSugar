import { Component, OnInit, OnDestroy } from '@angular/core';
import { SchedulerService } from './scheduler.service';

@Component({
  templateUrl: './scheduler-main.component.html',
  styleUrls: ['./scheduler-main.component.scss'],
  providers: [
    SchedulerService
  ]
})
export class SchedulerMainComponent implements OnInit, OnDestroy {

  constructor(
    public scheduler: SchedulerService
  ) {

  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.scheduler.destroy();
  }

}
