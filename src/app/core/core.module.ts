import { NgModule } from '@angular/core';
import { GeolocationService } from '@sugar/app/core/geolocation.service';
import { PostsService } from '@sugar/app/core/posts.service';
import { TransactionsService } from '@sugar/app/core/transactions.service';

@NgModule({
  providers: [
    GeolocationService,
    PostsService,
    TransactionsService
  ]
})
export class SugarCoreModule { }
