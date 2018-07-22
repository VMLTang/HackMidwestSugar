import { NgModule } from '@angular/core';
import { BrowserModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OktaAuthModule } from '@okta/okta-angular';
import { AppRoutingModule } from '@sugar/app/app-routing.module';
import { AppComponent } from '@sugar/app/app.component';
import { AuthInterceptor } from '@sugar/app/auth.interceptor';
import { SugarCoreModule } from '@sugar/app/core/core.module';
import { HaveModule } from '@sugar/app/have/have.module';
import { HomeComponent } from '@sugar/app/home';
import { LoginComponent } from '@sugar/app/login';
import { MapModule } from '@sugar/app/map/map.module';
import { NeedsModule } from '@sugar/app/needs/needs.module';
import { SugarSharedModule } from '@sugar/app/shared.module';
import { SugarFeedModule } from '@sugar/app/sugar-feed/sugar-feed.module';
import { environment } from '@sugar/environments/environment';
import * as Hammer from 'hammerjs';
import { HTTP_INTERCEPTORS, HttpClientModule } from '../../node_modules/@angular/common/http';

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
    HttpClientModule,
    SugarFeedModule,
    SugarSharedModule,
    SugarCoreModule,
    MapModule,
    NeedsModule,
    HaveModule,
    OktaAuthModule.initAuth(environment.oktaConfig),
    AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
