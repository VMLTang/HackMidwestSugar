import { NgModule } from '@angular/core';
import { SugarSharedModule } from '@sugar/app/shared.module';
import { StartComponent } from '@sugar/app/start/start';
import { StartService } from '@sugar/app/start/start.service';
import { FormsModule } from '../../../node_modules/@angular/forms';

@NgModule({
  declarations: [
    StartComponent
  ],
  imports: [
    FormsModule,
    SugarSharedModule
  ],
  exports: [
    StartComponent
  ],
  providers: [StartService],
  bootstrap: []
})
export class StartModule { }
