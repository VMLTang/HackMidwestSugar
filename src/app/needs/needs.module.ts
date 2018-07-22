import { NgModule } from '@angular/core';
import { NeedComponent } from '@sugar/app/needs/need/need';
import { NeedsComponent } from '@sugar/app/needs/needs';
import { NeedsCardComponent } from '@sugar/app/needs/needs-card/needs-card';
import { NeedsRoutingModule } from '@sugar/app/needs/needs-routing';
import { SugarSharedModule } from '@sugar/app/shared.module';
import { FormsModule } from '../../../node_modules/@angular/forms';

@NgModule({
  declarations: [
    NeedsComponent,
    NeedComponent,
    NeedsCardComponent
  ],
  imports: [
    FormsModule,
    SugarSharedModule,
    NeedsRoutingModule
  ],
  exports: [
    NeedsComponent,
    NeedComponent,
    NeedsCardComponent
  ],
  providers: [],
  bootstrap: []
})
export class NeedsModule { }
