import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OktaAuthModule } from '@okta/okta-angular';
import { SugarFeedModule } from '@sugar/app/sugar-feed/sugar-feed.module';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SugarCoreModule } from './core/core.module';
import { MapModule } from './map/map.module';
import { SugarSharedModule } from './shared.module';
import { HomeComponent } from './home';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    SugarFeedModule,
    SugarSharedModule,
    SugarCoreModule,
    MapModule,
    OktaAuthModule.initAuth(environment.oktaConfig),
    AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
