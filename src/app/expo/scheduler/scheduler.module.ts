import { SugarSharedModule } from '@sugar/app/shared.module';
import { NgModule } from '@angular/core';

import { SelectLocationComponent } from './select-location';
import { SelectTimeComponent } from './select-time';
import { SchedulerMainComponent } from './scheduler-main.component';

@NgModule({
  imports: [
    SugarSharedModule,
  ],
  declarations: [
    SchedulerMainComponent,
    SelectLocationComponent,
    SelectTimeComponent,
  ]
})
export class SchedulerModule { }
export { SelectLocationComponent } from './select-location';
export { SelectTimeComponent } from './select-time';
export { SchedulerMainComponent } from './scheduler-main.component';
