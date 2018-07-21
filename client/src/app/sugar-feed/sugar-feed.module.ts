import { NgModule } from '@angular/core';
import { TransactionsService } from '@sugar/app/core/transactions.service';
import { SugarSharedModule } from '@sugar/app/shared.module';
import { SugarFeedComponent } from '@sugar/app/sugar-feed/sugar-feed';
import { SugarFeedCardComponent } from '@sugar/app/sugar-feed/sugar-feed-card/sugar-feed-card';

@NgModule({
  declarations: [
    SugarFeedComponent,
    SugarFeedCardComponent
  ],
  imports: [SugarSharedModule],
  exports: [
    SugarFeedComponent,
    SugarFeedCardComponent
  ],
  providers: [TransactionsService],
  bootstrap: []
})
export class SugarFeedModule { }
