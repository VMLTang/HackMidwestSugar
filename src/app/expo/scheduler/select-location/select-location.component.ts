import { Component, OnInit, HostBinding } from '@angular/core';
import { SchedulerService } from '../scheduler.service';

@Component({
  selector: 'select-location', // tslint:disable-line
  templateUrl: './select-location.component.html',
  styleUrls: ['./select-location.component.scss']
})
export class SelectLocationComponent implements OnInit {
  @HostBinding() class = 'column justify-center align-center';

  when = '';

  constructor(
    public scheduler: SchedulerService
  ) {
    window['SelectLocationComponent'] = this;
  }

  ngOnInit() {
  }

}
