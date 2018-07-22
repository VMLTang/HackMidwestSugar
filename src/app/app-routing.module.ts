import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OktaAuthGuard, OktaCallbackComponent } from '@okta/okta-angular';
import { HomeComponent } from '@sugar/app/home/home.component';
import { LoginComponent } from './login';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'expo',
    loadChildren: 'src/app/expo/expo.module#ExpoModule',
    canActivate: [ AuthGuard ],
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'implicit/callback',
    component: OktaCallbackComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
