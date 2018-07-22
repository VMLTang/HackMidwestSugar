import { SugarSharedModule } from '@sugar/app/shared.module';
import { NgModule } from '@angular/core';

import { ExpoRouterModule } from './expo-router.module';
import { ConfirmationDialogComponent } from './confirmation-dialog';
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
    ConfirmationDialogComponent,
    ExpoMainComponent,
    ExpoCardComponent,
    ExpoNavComponent,
  ],
  entryComponents: [
    ConfirmationDialogComponent
  ]
})
export class ExpoModule { }
