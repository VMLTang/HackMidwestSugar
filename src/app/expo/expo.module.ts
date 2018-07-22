import { NgModule } from '@angular/core';
import { ExpoCardComponent } from '@sugar/app/expo/expo-card';
import { ExpoMainComponent } from '@sugar/app/expo/expo-main';
import { ExpoNavComponent } from '@sugar/app/expo/expo-nav';
import { ExpoRouterModule } from '@sugar/app/expo/expo-router.module';
import { SugarSharedModule } from '@sugar/app/shared.module';



@NgModule({
  imports: [
    SugarSharedModule,
    ExpoRouterModule
  ],
  declarations: [
    ExpoMainComponent,
    ExpoCardComponent,
    ExpoNavComponent,
  ]
})
export class ExpoModule { }
