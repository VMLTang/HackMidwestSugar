import { NgModule } from '@angular/core';
import { HaveComponent } from '@sugar/app/have/have';
import { HaveRoutingModule } from '@sugar/app/have/have-routing';
import { SugarSharedModule } from '@sugar/app/shared.module';
import { FormsModule } from '../../../node_modules/@angular/forms';

@NgModule({
  declarations: [
    HaveComponent
  ],
  imports: [
    FormsModule,
    SugarSharedModule,
    HaveRoutingModule
  ],
  exports: [
    HaveComponent
  ],
  providers: [],
  bootstrap: []
})
export class HaveModule { }
