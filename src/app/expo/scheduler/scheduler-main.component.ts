import { Component, OnInit } from '@angular/core';
import { SchedulerService } from './scheduler.service';

@Component({
  templateUrl: './scheduler-main.component.html',
  styleUrls: ['./scheduler-main.component.scss'],
  providers: [
    SchedulerService
  ]
})
export class SchedulerMainComponent implements OnInit {

  constructor(
    public scheduler: SchedulerService
  ) {

  }

  ngOnInit() {
  }

}
