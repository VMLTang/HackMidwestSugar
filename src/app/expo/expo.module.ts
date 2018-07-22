import { SugarSharedModule } from '@sugar/app/shared.module';
import { NgModule } from '@angular/core';

import { ExpoRouterModule } from './expo-router.module';
import { ExpoCardComponent } from './expo-card';
import { ExpoMainComponent } from './expo-main';
import { ExpoNavComponent } from './expo-nav';
import {
  SchedulerComponent,
  SelectLocationComponent,
  SelectTimeComponent,
} from './scheduler';

@NgModule({
  imports: [
    SugarSharedModule,
    ExpoRouterModule
  ],
  declarations: [
    ExpoMainComponent,
    ExpoCardComponent,
    ExpoNavComponent,
    SchedulerComponent,
    SelectLocationComponent,
    SelectTimeComponent,
  ]
})
export class ExpoModule { }
