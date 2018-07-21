import { NgModule } from '@angular/core';
import { PostsService } from './posts.service';
import { GeolocationService } from './geolocation.service';

@NgModule({
  providers: [
    GeolocationService,
    PostsService
  ]
})
export class SugarCoreModule { }
