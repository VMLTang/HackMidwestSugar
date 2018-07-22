import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { SchedulerService } from './scheduler.service';

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
  ) {

  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.scheduler.destroy();
  }

}
