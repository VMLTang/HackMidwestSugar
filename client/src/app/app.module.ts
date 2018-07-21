import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OktaAuthModule } from '@okta/okta-angular';

import { SugarSharedModule } from './shared.module';
import { SugarCoreModule } from './core/core.module';
import { MapModule } from '../map/map.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SugarSharedModule,
    SugarCoreModule,
    HomeModule,
    MapModule,
    OktaAuthModule.initAuth(environment.oktaConfig),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
