import { NgModule } from '@angular/core';
import { TransactionsService } from '@sugar/app/core/transactions.service';
import { GeolocationService } from './geolocation.service';
import { PostsService } from './posts.service';

@NgModule({
  providers: [
    GeolocationService,
    PostsService,
    TransactionsService
  ]
})
export class SugarCoreModule { }
