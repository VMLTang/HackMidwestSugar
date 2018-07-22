import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExpoMainComponent } from './expo-main';

import {
  SelectLocationComponent,
  SelectTimeComponent,
  SchedulerMainComponent
} from './scheduler';


const expoRoutes: Routes = [
  {
    path: 'schedule',
    component: SchedulerMainComponent,
    children: [
      {
        path: 'location',
        component: SelectLocationComponent
      },
      {
        path: 'time',
        component: SelectTimeComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'time',
      }
    ]
  },
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
