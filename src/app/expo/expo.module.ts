import { SugarSharedModule } from '@sugar/app/shared.module';
import { NgModule } from '@angular/core';

import { ExpoRouterModule } from './expo-router.module';
import { ExpoMainComponent } from './expo-main';
import { ExpoPostComponent } from './expo-post';


@NgModule({
  imports: [
    SugarSharedModule,
    ExpoRouterModule
  ],
  declarations: [
    ExpoMainComponent,
    ExpoPostComponent
  ]
})
export class ExpoModule { }
