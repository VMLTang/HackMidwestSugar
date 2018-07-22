import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NeedComponent } from '@sugar/app/needs/need/need';
import { NeedsComponent } from '@sugar/app/needs/needs';

export const needsRoutes: Routes = [
  {
    path: ':needsId',
    component: NeedComponent
  },
  {
    path: '',
    component: NeedsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(needsRoutes)],
  exports: [RouterModule]
})
export class NeedsRoutingModule { }
