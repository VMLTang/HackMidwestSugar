import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OktaCallbackComponent } from '@okta/okta-angular';
import { AuthGuard } from '@sugar/app/auth.guard';
import { HaveComponent } from '@sugar/app/have/have';
import { HomeComponent } from '@sugar/app/home/home.component';
import { LoginComponent } from '@sugar/app/login';
import { NeedsComponent } from '@sugar/app/needs/needs';

const routes: Routes = [
  {
    path: 'needs',
    component: NeedsComponent
  },
  {
    path: 'haves',
    component: HaveComponent
  },
  {
    path: 'expo/:postId',
    loadChildren: 'src/app/expo/expo.module#ExpoModule',
    // canActivate: [ AuthGuard ],
  },
  {
    path: 'expo',
    loadChildren: 'src/app/expo/expo.module#ExpoModule',
    // canActivate: [ AuthGuard ],
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
