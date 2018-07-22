import { Component, OnInit, HostBinding } from '@angular/core';
import { SchedulerService } from '../scheduler.service';

@Component({
  selector: 'select-time', // tslint:disable-line
  templateUrl: './select-time.component.html',
  styleUrls: ['./select-time.component.scss']
})
export class SelectTimeComponent implements OnInit {
  @HostBinding() class = 'column justify-space-between';

  constructor(
    public scheduler: SchedulerService
  ) {
    window['SelectTimeComponent'] = this;
  }

  ngOnInit() {
  }

}
