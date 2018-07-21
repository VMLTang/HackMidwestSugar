import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OktaAuthModule } from '@okta/okta-angular';
import { SugarFeedModule } from '@sugar/app/sugar-feed/sugar-feed.module';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SugarCoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { MapModule } from './map/map.module';
import { SugarSharedModule } from './shared.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SugarFeedModule,
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
