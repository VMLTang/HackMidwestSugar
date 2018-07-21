import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OktaAuthGuard } from '@okta/okta-angular';
import { HomeComponent } from '@sugar/app/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivateChild: [ OktaAuthGuard ],
    children: [

    ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
