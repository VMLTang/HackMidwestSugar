import * as Hammer from 'hammerjs';
import { NgModule } from '@angular/core';
import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OktaAuthModule } from '@okta/okta-angular';
import { SugarFeedModule } from '@sugar/app/sugar-feed/sugar-feed.module';
import { environment } from '../environments/environment';
import { AuthInterceptor } from './auth.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SugarCoreModule } from './core/core.module';
import { HomeComponent } from './home';
import { MapModule } from './map/map.module';
import { SugarSharedModule } from './shared.module';
import { LoginComponent } from './login';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

export class HammerConfig extends HammerGestureConfig  {
  readonly overrides = {
    swipe: {
      direction: Hammer.DIRECTION_VERTICAL
    },
    pan: {
      direction: Hammer.DIRECTION_ALL
    }
  };
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerConfig
    }
  ],
  imports: [
    BrowserAnimationsModule,
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
