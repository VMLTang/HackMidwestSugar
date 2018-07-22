import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersService } from '@sugar/app/core/user.service';
import { MapService } from '@sugar/app/map/map-service';
import { SugarSharedModule } from '@sugar/app/shared.module';
import { StartComponent } from '@sugar/app/start/start';
import { StartService } from '@sugar/app/start/start.service';

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
  providers: [
    StartService,
    MapService,
    UsersService],
  bootstrap: []
})
export class StartModule { }
