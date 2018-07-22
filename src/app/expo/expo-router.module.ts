import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExpoMainComponent } from './expo-main';

const expoRoutes: Routes = [
  {
    path: '',
    component: ExpoMainComponent,
  },
];


@NgModule({
  imports: [
    RouterModule.forChild(expoRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class ExpoRouterModule {}