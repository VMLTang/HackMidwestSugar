import { NgModule } from '@angular/core';
import { SugarSharedModule } from '@sugar/app/shared.module';
import { SugarFeedCardComponent } from '@sugar/app/sugar-feed/sugar-feed-card/sugar-feed-card';

@NgModule({
  declarations: [
    SugarFeedCardComponent
  ],
  imports: [SugarSharedModule],
  exports: [
    SugarFeedCardComponent
  ],
  providers: [],
  bootstrap: []
})
export class SugarFeedModule { }
