import { SugarSharedModule } from '@sugar/app/shared.module';
import { NgModule } from '@angular/core';

import { ExpoRouterModule } from './expo-router.module';
import { SchedulerModule } from './scheduler';
import { ExpoCardComponent } from './expo-card';
import { ExpoMainComponent } from './expo-main';
import { ExpoNavComponent } from './expo-nav';

@NgModule({
  imports: [
    SugarSharedModule,
    SchedulerModule,
    ExpoRouterModule
  ],
  declarations: [
    ExpoMainComponent,
    ExpoCardComponent,
    ExpoNavComponent,
  ]
})
export class ExpoModule { }
