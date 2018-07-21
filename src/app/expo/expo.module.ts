import { SugarSharedModule } from '@sugar/app/shared.module';
import { NgModule } from '@angular/core';

import { ExpoRouterModule } from './expo-router.module';
import { ExpoMainComponent } from './expo-main';


@NgModule({
  imports: [
    SugarSharedModule,
    ExpoRouterModule
  ],
  declarations: [
    ExpoMainComponent
  ]
})
export class ExpoModule { }
