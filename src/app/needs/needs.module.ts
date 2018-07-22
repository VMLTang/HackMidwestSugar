import { NgModule } from '@angular/core';
import { NeedComponent } from '@sugar/app/needs/need/need';
import { NeedsComponent } from '@sugar/app/needs/needs';
import { NeedsRoutingModule } from '@sugar/app/needs/needs-routing';
import { SugarSharedModule } from '@sugar/app/shared.module';

@NgModule({
  declarations: [
    NeedsComponent,
    NeedComponent
  ],
  imports: [
    SugarSharedModule,
    NeedsRoutingModule
  ],
  exports: [
    NeedsComponent,
    NeedComponent
  ],
  providers: [],
  bootstrap: []
})
export class NeedsModule { }
